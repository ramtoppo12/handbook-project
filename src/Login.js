import React from 'react';
import "./login.css";
import Button from '@material-ui/core/Button';
import {auth ,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer"


function Login() {
    const [state,dispatch]  = useStateValue();
    
    const signIn = ()=>{
            auth.signInWithPopup(provider).then(result=>{
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
                console.log("this is after login",dispatch)

            }).catch(err=>{
                alert(err.message)
            })
    }
    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdmcnallyconsulting.com%2Fwp-content%2Fuploads%2F2017%2F11%2FEmployee-Handbook.png&f=1&nofb=1"/>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rmcjL-D3gP61aiMeVia1AwHaDS%26pid%3DApi&f=1"/>
            </div>
            <Button type="submit" onClick={signIn}>
Signin
            </Button>
        </div>
    )
}

export default Login
