import { useContext } from "react"
import { UserContext } from "../context/User"

const UserCard = ({user}) => {
    const { user: loggedInUser, setUser } = useContext(UserContext)
    console.log(loggedInUser);

    const onclick = () => {
        setUser(user)
    }

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
