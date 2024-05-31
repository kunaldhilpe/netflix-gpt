import Login from "./login";
import { bgImage } from "../constants/image";

const Body = () => {

    return(
        <div>
            <div>
                <img src={bgImage} alt="bg-logo" /> 
            </div>
            <div>
                <Login />
            </div>
        </div>
    )
}

export default Body;