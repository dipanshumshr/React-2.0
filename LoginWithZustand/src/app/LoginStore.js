import { create } from "zustand";

const useLogin = create(set => ({
    user : {
        username : "",
        password : ''
    },

    login : (userDetails) => {
        set(state => state.user = {
            username : userDetails.name,
            password : userDetails.password
        } )
    },

    logOut : () => {
        set( state =>  ({
            user : {
            username : "",
            password : ""

    }}))
    }
}))

export default useLogin;