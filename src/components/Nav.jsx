import { Link } from "react-router-dom"
import { UserContext } from "../context/User"

function Nav (){

    return (
            <div className="nav_bar">
                <Link className="nav_button" to="/">Home</Link>
                <br/>
                <br/>
                <Link className="nav_button" to="/reviews">Reviews</Link>
                <UserContext.Consumer>
                    {value =><h3> loged in as: {value.user.username} </h3>}
                </UserContext.Consumer>
            </div>
    )
}
export default Nav