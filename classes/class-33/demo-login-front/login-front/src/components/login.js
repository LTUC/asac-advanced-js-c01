import { useContext, useState } from "react";
import { LoginContext } from "./context";
import { When } from 'react-if';


export default function Login() {
    const login2 = useContext(LoginContext);    
    // {
    //     loggedIn:loggedIn,
    //     user:user,
    //     login:login,
    //     logout:logout
    // }
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        login2.login(username,password)
    }

    return (
        <>
            <When condition={!login2.loggedIn}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
                    <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
                    <button type='submit'>Log in</button>
                </form>
            </When>

            <When condition={login2.loggedIn}>
                <div>{login2.user.username}</div>
                <button onClick={login2.logout}>logout</button>
            </When>

        </>
    )
}