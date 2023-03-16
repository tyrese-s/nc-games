import { useEffect, useState } from "react"
import { getComments, getSingleReview } from "../utils/api"
import { useParams, useNavigate} from "react-router-dom"

function Comments () {
    const { review_id } = useParams()
    const [comments, setComments] = useState([])
    const[isLoading, setIsLoading] =useState(true)
    const navigate = useNavigate()
    const [review, setReview] = useState([])
    
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

    return (
    <main>
          {isLoading ? (
            <h2>Loading...</h2>
        ) :(
         <li key={review.review_id} >
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
        {isLoading ? (
            <h2>Loading...</h2>
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