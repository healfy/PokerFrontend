import Button from "react-bootstrap/Button";
import {TableInfoModal} from "../TableInfo";
import React, {useState} from "react";
import {BackendClient} from "../../../Api/client";

interface IProps {
    pk: number,
    name: string,
    seats: number,
    available: boolean,
    client: BackendClient,
}


export const TableColumns = (props: IProps) => {
    const {pk, name, seats, available, client} = props;
    const [show, setShow] = useState(false)
    return (
        <>
            <td className="td-tables">{name}</td>
            <td className="td-tables">{seats}</td>
            <td>
                {available? <button className="button-available"/>: <> qwer </>}
            </td>
            <td>
                <Button onClick={() => setShow(true)}>Open</Button>
                <TableInfoModal
                    show={show}
                    onHide={() => {setShow(false)}}
                    table_id={pk}
                    client={client}
                />
            </td>
        </>
    )
}