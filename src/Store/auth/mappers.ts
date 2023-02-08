import {updateAuthStatus} from "./actions";
import {AuthState} from "./reducer";
import {connect} from "react-redux";

export const mapStateToProps = (state: { auth: AuthState }) => ({
    user_id: state.auth.user_id,
})

export const mapDispatchToProps = {
    updateAuthStatus,
}

export const connector = connect(mapStateToProps, mapDispatchToProps);