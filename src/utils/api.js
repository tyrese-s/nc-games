import axios from "axios"

const reviewsApi = axios.create({
    baseURL: 'https://board-games-seo7.onrender.com/api'
})

export const getReviews = () => {
    return reviewsApi.get('/reviews').then(({data}) => {
        return data}
)}