import {user_data} from "../../recoil/Atoms/index";
import {useRecoilState,useRecoilValue} from "recoil";
import styles from "./posts.module.css";
import {verify_auth} from "../../recoil/Selectors/index";

export default function Posts(){
    const [data,setData] = useRecoilState(user_data);
    const isVerified = useRecoilValue(verify_auth);
    if(!isVerified)
    {
        return <h1>Not Authorized to see posts</h1>
    }
    return (
        <div id="posts" className={styles.posts}>
            {
                data.posts.map(url=><img src={url} key={url+Math.random().toString()} alt="Some nice from srinagar"/>)
            }
        </div>
    )
}