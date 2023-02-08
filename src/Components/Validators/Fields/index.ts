import {emailRegex, pwdRegex} from "../Regex";
import {PWD_HELP_TEXT, C_PWD_HELP_TEXT} from "Constants";


export function emailValidator(value: string): object {
    return {email: !(emailRegex.test(value)) ? 'Email is invalid' : ''}
}



export function passwordValidator(pwd: string, confirm: string): object{
    return {
        password: !(pwdRegex.test(pwd)) ? PWD_HELP_TEXT : '',
        confirm_password: pwd === confirm? "": C_PWD_HELP_TEXT,
    }
}
