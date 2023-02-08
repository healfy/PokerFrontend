import Form from "react-bootstrap/Form";
import * as React from "react";

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

interface IProps {
    value: string,
    label: string,
    type: string,
    placeholder: string,
    name: string,
    errorMessage: string,
    onChange?: React.ChangeEventHandler<FormControlElement>
}

export const FormField = (props: IProps) => {
    const {label, type, placeholder, name, errorMessage, onChange} = props;
    return (
        <Form.Group className="col-md-6 offset-md-3 col-xs-12">
            <Form.Label>{label}</Form.Label>
            <Form.Control onChange={onChange} id={name} type={type} placeholder={placeholder} size="lg" aria-describedby={name}/>
            <Form.Text id={name} muted>
                {errorMessage}
            </Form.Text>
        </Form.Group>
    )
}