import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import {TablePreview} from "../TablePreview";
import {useNavigate} from "react-router-dom";
import {BackendClient} from "Api/client";
import {TableData} from "Api/types";


interface IProps {
    show: boolean,
    onHide: (() => void) | undefined,
    table_id: number,
    client: BackendClient,
}
const defaultTableData: TableData = {
        id: 0,
        name: "",
        seats: [],
        user_here: false,
        available: false,
};

export function TableInfoModal(props: IProps) {

    const {show, onHide, table_id, client} = props
    const [tableData, setTableData] = useState<TableData>(defaultTableData)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [showGame, setShowGame] = useState<boolean>(false)
    const navigate = useNavigate();

    useEffect(() => {
        client.getTable(table_id).then(function (result) {
            setTableData(result)
            setDisabled(!result.available)
        })
    }, [client, table_id])

    const msg = tableData.user_here? "Play" : "Take a seat"

    const onClick = async () => {
        if (tableData.user_here) {
        } else {
            await client.reserveSeat(table_id)
        }
        navigate(`/tables/${table_id}`)
    }
    return (
        <Modal show={show} onHide={onHide} size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered>
            <Modal.Header closeButton>
                <Modal.Title>Table {tableData.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TablePreview tableData={tableData}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={onClick}>
                    {msg}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
