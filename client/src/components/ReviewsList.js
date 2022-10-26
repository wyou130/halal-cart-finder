import { useEffect, useState } from "react"
import ReviewItem from "./ReviewItem"
import Sort from "./Sort"
import Search from "./Search"
import { Item, Container, Menu } from 'semantic-ui-react'

function ReviewsList() {

    const [reviewsList, setReviewsList] = useState([])
    const [search, setSearch] = useState("")
    const [sortBy, setSortBy] = useState("")

    useEffect(() => {
        fetch('/reviews')
            .then(res => res.json())
            .then(reviews => setReviewsList(reviews))
    }, [])

    function onUpdateReview(updatedReview) {
        const updatedReviewList = reviewsList.map(review => {
            if (review.id === updatedReview.id) return updatedReview
            else return review
        })
        setReviewsList(updatedReviewList)
    }

    function onDeleteReview(deletedReview) {
        const updatedReviewList = reviewsList.filter(review => {
            return review.id !== deletedReview.id
        })
        setReviewsList(updatedReviewList)
    }

    function onHandleSort(sortInput) {
        setSortBy(sortInput)
    }

    function onHandleSearch(searchInput) {
        setSearch(searchInput)
    }

    const sortOptions = [
        {
            text: '',
            value: ''
        },
        {
            text: 'Rating High-to-Low',
            value: 'rating'
        },
        {
            text: 'Date New-to-Old',
            value: 'date'
        }
    ]

    const sortedFilteredReviews = reviewsList
        // map necessary to turn date_visited string into date format so sort by date would work
        .map(review => {return {...review, date_visited: new Date(review.date_visited)}})
        .filter(review => {
            return (
                review.review.toLowerCase().includes(search.toLocaleLowerCase()) || review.user_name.toLowerCase().includes(search.toLocaleLowerCase()) || review.cart_name.toLowerCase().includes(search.toLocaleLowerCase())
            )
        })
        .sort((a, b) => {
            if (sortBy === "") return reviewsList
            else if (sortBy === "Rating High-to-Low") return b.rating - a.rating
            else if (sortBy === "Date New-to-Old") return b.date_visited - a.date_visited
        })

    return (
        <Container>
            <Container textAlign='center' style={{width: '50%'}}>
                <h3>All Reviews</h3>
                <Menu text widths={2}>
                    <Sort 
                        sortOptions={sortOptions} 
                        onHandleSort={onHandleSort}
                    />
                    <Search 
                        onHandleSearch={onHandleSearch} 
                        label="Reviews" 
                        placeholder="by cart, user, or content"
                    />
                </Menu>
            </Container>
            <br/>
            <Item.Group divided> 
                {sortedFilteredReviews.map(review => <ReviewItem onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview} key={review.id} review={review}/>)}
            </Item.Group>
        </Container>
    )
}

export default ReviewsList