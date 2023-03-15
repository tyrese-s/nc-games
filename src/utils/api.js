import axios from "axios"

const reviewsApi = axios.create({
    baseURL: 'https://board-games-seo7.onrender.com/api'
})

export const getReviews = () => {
    return reviewsApi.get('/reviews').then(({data}) => {
        return data}
)}

export const getSingleReview = (review_id) => {
    return reviewsApi.get(`/reviews/${review_id}`).then(({data}) => {
        return data}
)}