import {emailValidator, passwordValidator} from "./Fields";


interface Form {
    password: string,
    confirm_password: string,
    email: string
}
export function RegisterFormValidator (form:Form): Array<object> {
    const errors =  {...passwordValidator(form.password, form.confirm_password), ...emailValidator(form.email)}
    return [Object.values(errors).every(x => x === null || x === ''), errors]
}
