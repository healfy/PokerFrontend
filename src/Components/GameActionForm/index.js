import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React ,{useState} from "react";
import {Timer} from "../Timer";


const ActionsTools = () => {
    const [betValue, setValue] = useState(24)
    return (
        <>
            <Col xs="auto">
                <Button className="mb-2">
                    Fold
                </Button>
            </Col>
            <Col xs="3">
                <Form.Label>{betValue}</Form.Label>
                <Form.Range value={betValue} onChange={(ev)=> {setValue(parseInt(ev.target.value))}}/>
            </Col>
            <Col xs="auto">
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Fold"
                />
            </Col>
            <Col xs="auto">
                <Button className="mb-2">
                    Bet
                </Button>
            </Col>
            <Col xs="auto">
                <Button className="mb-2">
                    Raise
                </Button>
            </Col>
            <Col xs="auto">
                <Timer/>
            </Col>
        </>
    )
}


export const ActionsForm = ({handler}) =>{
    const [status, setStatus] = useState(1)
    return (
        <Form>
            <Row className="align-items-md-end">
                <Col xs="4">
                    <Button variant="outline-dark" onClick={handler} className="mb-2" >Close</Button>
                </Col>
                {status === 1? <ActionsTools/>: <></>}
            </Row>
        </Form>
    )
}