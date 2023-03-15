import { useEffect, useState } from "react"
import { getComments } from "../utils/api"
import { useParams, useNavigate} from "react-router-dom"

function Comments () {
    const { review_id } = useParams()
    const [comments, setComments] = useState([])
    const[isLoading, setIsLoading] =useState(true)
    const navigate = useNavigate()
    
    useEffect(() => {
        setIsLoading(true)
        getComments(review_id).then((data) => {
            setComments(data)
        })
        setIsLoading(false)
    }, [review_id])

    return (
    <main>
        <h2>Comments</h2>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
            <ul className="comments__list">
        {comments.map((comment) => {
            return (
                <li key={comment.comment_id} className="individual__comment">
                    <article>
                        <h3>{comment.author}</h3>
                        <p>{comment.body}</p>
                        <p>votes: {comment.votes}</p>
                        <p>{comment.created_at}</p>
                    </article>
                </li>
            )
        })}
        <button onClick={() => navigate(-1)}>Back to review</button>
        </ul>
        )}
    </main>
    )
}

export default Comments