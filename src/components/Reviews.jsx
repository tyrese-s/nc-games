import { useEffect, useState } from "react"
function Reviews () {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://board-games-seo7.onrender.com/api/reviews`)
        .then((res) => res.json())
        .then((data) => 
        setReviews(data))
        ;
    }, [])

    return (
        <main>
            <ul className="review__list">
            {reviews.map((review) => {
                return (
                    <li key={review.review_id} className="individual__review">
                    <img src={review.review_img_url} alt="review img" className="review__img"/>
                    <div className="individual__review__text">
                    <h3>
                    {review.title}
                    </h3>
                    <h4>
                        game designer: {review.designer}
                    </h4>
                    <br />
                    <h5>
                    review author: {review.owner}
                    </h5>
                    <p>
                     created at: {review.created_at}   
                    </p>
                    <br />
                    <p>
                    Comments: {review.comment_count}
                    </p>
                    <p>
                    votes: {review.votes}
                    </p>   
                    </div>
                    </li>
                    )
            })}
            </ul>
        </main>
    )
}

export default Reviews