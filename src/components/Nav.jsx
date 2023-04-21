import { Link } from "react-router-dom"
import { UserContext } from "../context/User"

function Nav (){

    return (<div>
        <Link to="/">Home</Link>
        <br />
        <br />
        <Link to="/reviews">Reviews</Link>
        <UserContext.Consumer>
            {value =><h3> loged in as: {value.user.username} </h3>}
        </UserContext.Consumer>
    </div>
    )
}
export default Nav