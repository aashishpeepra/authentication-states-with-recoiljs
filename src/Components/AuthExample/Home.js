import {user_creds} from "../../recoil/Atoms/index";
import {verify_auth} from "../../recoil/Selectors/index";
import {useRecoilState,useRecoilValue} from "recoil";

export default function Home(){
    const [creds,setCreds] = useRecoilState(user_creds);
    const isVerified = useRecoilValue(verify_auth)
    if(!isVerified){
        return <h1>Not Authorized</h1>
    }
    return (
        <div id="home">
            <h3>Email: {creds.email}</h3>
            <h3>Password : {creds.password.substring(5) + "***"}</h3>
        </div>
    )
}