import { useContext, useEffect, useState } from "react"
import { getComments, getSingleReview, postCommentForReview } from "../utils/api"
import { useParams, useNavigate} from "react-router-dom"
import { UserContext } from "../context/User"

function Comments () {
    const { review_id } = useParams()
    const [comments, setComments] = useState([])
    const[isLoading, setIsLoading] =useState(true)
    const navigate = useNavigate()
    const [review, setReview] = useState([])
    const [newComment, setNewComment] = useState({})
    const [loggedInUser, setLoggedInUser] = useState('')
    const newUser = useContext(UserContext)
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        const loggedInUserContext = newUser.user.username
        setLoggedInUser(loggedInUserContext)
    }, [newUser.user.username])

    useEffect(() => {
        setIsLoading(true)
        getComments(review_id).then((data) => {
            setComments(data)
            setIsLoading(false)
        })
    }, [review_id])

    useEffect(() => {
        setIsLoading(true)
        getSingleReview(review_id).then((data) => {
            setReview(data)
            setIsLoading(false)
        })
    },[review_id])

    const handleSubmit = (event) => {
        setFormSubmitted(false)
        event.preventDefault()
        console.log(loggedInUser);
        setNewComment({
            username: loggedInUser,
            body: newComment.body
        })
        postCommentForReview(review_id, newComment)
        setFormSubmitted(true)
    }

     const handleChange = (event) => {
        //  setNewComment(event.target.value)
        console.log(event.target.value);
        const name = event.target.name
        const value = event.target.value
        setNewComment(values => ({...values, username: loggedInUser, [name]: value}))
     }

     return (
         <main>
          {isLoading ? (
              <h2>Loading...</h2>
        ) :(
            <li key={review_id} >
            <article className="individual__review">
            <img src={review.review_img_url} alt="review img" className="review__img"/>
            <div className="individual__review__text">
            <h3>{review.title}</h3>
            <h4>game designer: {review.designer}</h4>
            <br/>
            <h5>review author: {review.owner}</h5>
            <p>{review.review_body}</p>
            <p>created at: {review.created_at}</p>
            <br/>
            <p>votes: {review.votes}</p>   
            </div>
    </article>
    </li>
        )}
        <h2>Comments</h2>   
                    <form className="comment__post" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username: {loggedInUser} </label>
                        {/* <input type="text" id="username" name="username" disabled value={newComment.username || ""} onChange={handleChange} /> */}
                        <label htmlFor="body">Comment: </label>
                        <input type="text" id="body" name="body" value={newComment.body || ""} onChange={handleChange}/>
                        <button >comment</button>
                        {formSubmitted ? (
                            <p>comment submitted!</p>
                        ) : (
                            <p></p>
                        )}
                    </form>
            <ul className="comments__list">
        {comments.map((comment) => {
            return (
                <section>
                <li key={comment.comment_id} className="individual__comment">
                    <article>
                        <h3>{comment.author}</h3>
                        <p>{comment.body}</p>
                        <p>votes: {comment.votes}</p>
                        <p>{comment.created_at}</p>
                    </article>
                </li>
                </section>
            )
        })}
        <button onClick={() => navigate(-1)}>Back to review</button>
        </ul>
    </main>
    )
}

export default Comments