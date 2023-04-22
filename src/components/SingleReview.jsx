import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getSingleReview, voteForReview} from "../utils/api";

function SingleReview () {
    const { review_id } = useParams()
    const [review, setSingleReview] = useState([])
    const [userVote, setUserVote] = useState(0)
    const [isVotingErr, setIsVotingErr] = useState(false)
    
    useEffect(() => {
        getSingleReview(review_id).then((data) => {
            setSingleReview(data)
        })
    },[review_id])

    const onclickVotes = () => {
        setIsVotingErr(false)
        setUserVote(1)
        voteForReview(review.review_id).catch(() => {
            setUserVote(0)
            setIsVotingErr(true)
        })
    }
    
return (
    // <p>from ReviewCard, i am review {review_id}</p>

    <div className="single__review">
        <img src={review.review_img_url} alt="review img"/>
        <div className="individual__review__text">
        <h3>{review.title}</h3>
        <h4>game designer: {review.designer}</h4>
        <br/>
        <h5>review author: {review.owner}</h5>
        <p>{review.review_body}</p>
        {/* <p>created at: {review.created_at}</p> */}
        <br/>
        <Link to={`/reviews/${review.review_id}/comments`}>
        <p className="comment_button">See Comments </p>
        </Link>
        <p>votes: {review.votes + userVote}</p>
        <button onClick={onclickVotes} disabled={userVote !== 0}>vote</button>
        {isVotingErr && <p>voting error! Try again</p>}   
        </div>
    </div>
)
}

export default SingleReview