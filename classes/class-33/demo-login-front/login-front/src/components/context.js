import React, { useEffect, useState } from "react";
import base64 from 'base-64';
import superagent from 'superagent';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';


const API = `http://localhost:3030`;
export const LoginContext = React.createContext();

export default function LoginProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    // Basic encoded(username:password) >> Basic eW=hdtgsjs
    const login = async (username, password) => {
        // localhost:3030/signin
        const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
        console.log('inside login >> response', response);//userInfo + token
        validateMyUser(response.body)
    }

    const validateMyUser = (data) => {
        if (data) {
            const validUser = jwt.decode(data.token);
            if (validUser) {
                setLoginstate(true, data);
                cookie.save('userData', data);
            } else {
                setLoginstate(false, {})
            }
        } else {
            setLoginstate(false, {})
        }

    }

    const setLoginstate = (isLogged, userData) => {
        setLoggedIn(isLogged);
        setUser(userData);
    }

    const logout = () => {
        setLoggedIn(false);
        setUser({});
        cookie.remove('userData');
    }

    useEffect(() => {
        const myUserInfo = cookie.load('userData');
        validateMyUser(myUserInfo);
    }, [])


    const canDo = (capability) => {
        // optional chaining 
        return user?.actions?.includes(capability);
    }

    const state = {
        loggedIn: loggedIn,
        user: user,
        login: login,
        logout: logout,
        canDo: canDo
    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}


// user
// {
//     "actions": [
//         "read"
//     ],
//     "id": 5,
//     "username": "sherry",
//     "password": "$2b$05$Pj0ShQMfWAvT7oZ7vT1I5Oi0l7L2NAlKzt6MmeH9Os3MuE7y7pXWy",
//     "role": "user",
//     "createdAt": "2022-05-19T06:59:24.154Z",
//     "updatedAt": "2022-05-19T06:59:24.154Z",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoZXJyeSIsImlhdCI6MTY1Mjk0NDcwMH0.A220ptaTS9sU4Znj0fOQNCDy1fs6TsJuCDYrJoke31U"
// }