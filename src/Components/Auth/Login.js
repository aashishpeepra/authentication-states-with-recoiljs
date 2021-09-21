import {useState} from "react";
import {user_creds} from "../../recoil/Atoms/index";
import styles from "./Login.module.css";
import {useRecoilState} from "recoil";

export default function Login(){
    // normal react component local states
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    // Recoil state
    const [userData,setUserData] = useRecoilState(user_creds);

    function onSubmitForm(e){
        e.preventDefault();
        setUserData({email,password});
    }

    function onLogout(){
        setUserData({});
    }
    return (
        <div id="login-page" className={styles.login}>
            <form id="login-form" onSubmit={onSubmitForm}>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input placeholder="enter any email" id="email" name="email" type="email" required autoComplete value={email} onChange={e=>setEmail(e.target.value)}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input placeholder="enter any password" type="password" id="password" name="password" required min={8} max={16} value={password} onChange={e=>setPassword(e.target.value)}/>
                </fieldset>
                <button type="submit">Log in</button>
            </form>
            <button type="button" onClick={onLogout}>Log Out</button>
        </div>
    )
}