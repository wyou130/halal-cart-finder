import { useEffect, useState } from "react"
import SuggestionItem from "./SuggestionItem"
import { Item, Container } from 'semantic-ui-react'

function SuggestionsList() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch('/suggestions')
        .then(res => res.json())
        .then(suggestions => setSuggestions(suggestions))
    }, [])

    return (
        <Container>
            <Container textAlign='center'>
                <h3>Suggestions List</h3>
            </Container>
            <Item.Group divided>
                {suggestions.map(suggestion => <SuggestionItem key={suggestion.id} suggestion={suggestion} />)}
            </Item.Group>
        </Container>
    )
}

export default SuggestionsList