import  Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { FormField } from "Components/FormField";
import {FormEventHandler, useState} from "react";
import {RegisterFormValidator} from "Components/Validators";
import { connector} from "Store/auth/mappers";
import {useNavigate} from "react-router-dom";
import {ErrorInfo} from "Components/ErrorModal";
import { ConnectedProps } from 'react-redux';
import {BackendClient} from "Api/client";

interface Target {
    value: any,
    id: string
}

interface OnChangeProps {
    target: Target
}
type PropsFromRedux = ConnectedProps<typeof connector>;

function Register(props: PropsFromRedux) {
    const client  = new BackendClient("http://localhost:8001/v1")
    const fields = {email: "", password: "", confirm_password: ""}
    const [form, setForm] = useState(fields)
    const [errors, setErrors] = useState(fields)
    const [show, setShow] = useState(false)
    const [text, setText] = useState("")
    const navigate = useNavigate();

    const onSubmit: FormEventHandler = async (event) => {
        event.preventDefault()
        const [isValid, errors] = RegisterFormValidator(form)
        if (!isValid) {
            setErrors(prevState => ({...prevState, ...errors}))
        } else {
            setErrors(fields)
            try {
                await client.register_user(form)
                navigate("/tables")
            } catch (e) {
                setShow(true)
                setText("we")
            }
        }
    }

    const onChange: (props: OnChangeProps) => void = (props:OnChangeProps) => {
        setForm(prevState => ({...prevState, [props.target.id]: props.target.value}))
    }

    return (
        <div className="container ">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
                <Link to="/sign">
                    Already have an account?
                </Link>
            </p>
            <Form onSubmit={onSubmit}>
                <FormField value={form.email} name="email" type="email" label="Email address"
                           placeholder="name@example.com" onChange={onChange} errorMessage={errors.email}/>
                <FormField value={form.password} name="password" type="password" label="password"
                           placeholder="password123" onChange={onChange} errorMessage={errors.password}/>
                <FormField onChange={onChange}
                           name={"confirm_password"}
                           type={"password"}
                           label={"Confirm Password"}
                           placeholder={"password123"}
                           value={form.confirm_password}
                           errorMessage={errors.confirm_password}
                />
                <Button variant="primary" size="lg" active type="submit" className="mt-lg-4">
                    Sign up
                </Button>
            </Form>

            <ErrorInfo show={show} text={text} handleClose={() => setShow(false)} title={"Registration failed"}/>
        </div>
    );
}

export default connector(Register)
