import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import { Link, useParams } from "react-router-dom"

function Reviews () {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {review_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getReviews()
        .then((data) => 
        setReviews(data))
        setIsLoading(false)
    }, [])

    return (
        <main>
            <h2>Reviews</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul className="review__list">
            {reviews.map((review) => {
                return (
                    <li key={review.review_id} className="individual__review">
                    <article >
                        <img src={review.review_img_url} alt="review img" className="review__img"/>
                        <div className="individual__review__text">
                            <Link to={`/reviews/${review.review_id}`}>
                        <h3>{review.title}</h3>
                            </Link>
                        <h4>game designer: {review.designer}</h4>
                        <br/>
                        <h5>review author: {review.owner}</h5>
                        <p>created at: {review.created_at}</p>
                        <br/>
                        <p>Comments: {review.comment_count}</p>
                        <p>votes: {review.votes}</p>   
                        </div>
                    </article>
                    </li>
                    )
                })}
            </ul>
                )}
        </main>
    )
}

export default Reviews