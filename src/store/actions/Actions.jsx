export const RESET_VALID_USER = "RESET_VALID_USER";

export const ValidUser = (input) => {
    return {
        type : "CHECK_VALID_USER",
        payload : input
    }
}
export const Product = (input) => {
    return {
        type : "CHECK_PRODUCTS",
        payload : input
    }
}
export const LoggedIn = (input) => {
    return {
        type : "CHECK_LOGGEDIN",
        payload : input
    }
}
export const UpdateForm = (input) => {
    return {
        type:"UPDATE_FORM",
        payload: input
    }
}
export const ResetForm = (input) => {
    return {
        type:"RESET"
    }
}