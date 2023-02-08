import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {FormField} from "Components/FormField"
import {FormEventHandler, KeyboardEvent, useState} from "react";
import {ConnectedProps} from "react-redux";
import {connector} from "Store/auth/mappers";
import { useNavigate } from "react-router-dom";
import {BackendClient} from "Api/client";



type PropsFromRedux = ConnectedProps<typeof connector>;

interface Target {
    value: any,
    id: string
}

interface OnChangeProps {
    target: Target
}

const  Sign = (props: PropsFromRedux) => {
    const client  = new BackendClient("http://localhost:8001/v1")
    const navigate = useNavigate();
    const [form, setForm] = useState({email: '', password: ''})

    const onSubmit: FormEventHandler = async (event:  KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault()
        let user_id: number| null = await client.login(form)
        if (user_id) {
            props.updateAuthStatus(user_id)
            navigate("/tables")
        }
    }

    const onChange: (props: OnChangeProps) => void = (props:OnChangeProps) => {
        setForm(prevState => ({...prevState, [props.target.id]: props.target.value}))
    }

    return (
        <div className="container ">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
                <Link to="/register">
                    Need an account?
                </Link>
            </p>
            <Form onSubmit={onSubmit}>
                <FormField value={form.email} name="email" type="email" label="Email address"
                           placeholder="name@example.com" onChange={onChange} errorMessage={""}/>
                <FormField value={form.password} name="password" type="password" label="password"
                           placeholder="password123" onChange={onChange} errorMessage={""}/>
                <Button variant="primary" size="lg" active className="mt-lg-4" onClick={onSubmit}>
                    Sign in
                </Button>
            </Form>
        </div>
    );
}

export default connector(Sign)
