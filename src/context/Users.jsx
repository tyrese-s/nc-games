import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "../components/UserCard";

const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUsers().then((usersFromApi) => {
            setUsers(usersFromApi)
            setIsLoading(false)
        })
    }, [])

    return (
        <section>
        <h2>Pick a user</h2>
        {isLoading ? (
            <p>loading...</p>
        ) : (
            <ul className="user__list">
            {users.map((user) => {
                return <UserCard key={user.username} user={user}/>
            })}
            </ul>
        )}
        </section>
    )
}

export default Users