import {selector} from "recoil";
import {user_creds} from "../Atoms/index";

export const verify_auth = selector({
    key:"verifyAuth",
    get:({get})=>{
        // checking for valid user creds
        let user_data = get(user_creds);
        if(user_data.email && user_data.password){
            return true;
        }
        else{
            return false;
        }
    }
})