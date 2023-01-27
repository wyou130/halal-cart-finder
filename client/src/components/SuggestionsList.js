import { useEffect, useState } from "react"
import SuggestionItem from "./SuggestionItem"

function SuggestionsList() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch('/suggestions')
        .then(res => res.json())
        .then(suggestions => setSuggestions(suggestions))
    }, [])

    return (
        <div>
            <p>Suggestions List</p>
            {suggestions.map(suggestion => <SuggestionItem key={suggestion.id} suggestion={suggestion} />)}
        </div>
    )
}

export default SuggestionsList