import React, {useEffect, useState, MouseEvent} from 'react';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import "./style.css"
import {BackendClient} from "Api/client";
import {TableColumns} from "Components/PokerTable/TableColumns";


interface TableData {
  id: number;
  name: string;
  seats: number;
  user_here: boolean;
  available: boolean;
}
export const Tables = () => {
    const client = new BackendClient("http://localhost:8001/v1")
    const [rows, setRows] = useState<Array<TableData>>([])

    useEffect(()=> {
        const newSocket = new WebSocket(`ws://localhost:8001/ws/tables`);
        newSocket.onmessage = (ev) => {
            setRows(JSON.parse(ev.data))
        }
        return () => {
            newSocket.close()
        }
    }, [])

    const onClick = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        await client.createTable()
    }
    return (
        <div className="container">
            <Table bordered hover size="sm" striped="columns">
                <thead>
                <tr>
                    <th>Table Name</th>
                    <th>Number of seats </th>
                    <th>Available</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    rows.map((data: TableData, index) => (
                        <tr key={index}>
                            <TableColumns pk={data.id} client={client} seats={data.seats} available={data.available} name={data.name}/>
                        </tr>

                    ))
                }
                </tbody>
            </Table>
            <Button variant="primary" size="lg" active className="mt-lg-4" onClick={onClick}>
                Add Table
            </Button>
        </div>
    );
}
