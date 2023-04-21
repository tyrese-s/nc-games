import { useContext } from "react"
import { UserContext } from "../context/User"
import { useNavigate } from "react-router-dom"

const UserCard = ({ user }) => {
    const { user: loggedInUser, setUser } = useContext(UserContext)

    const navigate = useNavigate()
    const onclick = () => {
        setUser(user)
        navigate('/reviews')
    }

    console.log(loggedInUser);

return (
    <main>
    <li className="user__card">
        <h2>{user.username}</h2>
        <button className="user__button" onClick={onclick}>log me in</button>
        <img src={user.avatar_url} alt={`profile of ${user.username}`} />
    </li>
    </main>
)
}   

export default UserCard
