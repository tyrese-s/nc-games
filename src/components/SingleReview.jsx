import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getSingleReview } from "../utils/api";

function SingleReview () {
    const { review_id } = useParams()
    const [review, setSingleReview] = useState([])
    
    useEffect(() => {
        getSingleReview(review_id).then((data) => {
            setSingleReview(data)
        })
    },[review_id])
    
return (
    // <p>from ReviewCard, i am review {review_id}</p>

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
        <p>Comments: {review.comment_count}</p>
        <p>votes: {review.votes}</p>   
        </div>
    </article>
    </li>
)
}

export default SingleReview