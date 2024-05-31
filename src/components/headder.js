import { netflix_logo } from "../constants/image";

const Headder = () => {

    return(
        <div>
            <img className="w-60 absolute px-10"
             src={netflix_logo} alt="netflix-logo" />
        </div>
    )
}

export default Headder;