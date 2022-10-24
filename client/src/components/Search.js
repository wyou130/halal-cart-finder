import { Input } from 'semantic-ui-react'

function Search({ onHandleSearch, label, placeholder }) {

    return (
        <div>
            <label htmlFor="search">Search {label}: </label>
            <Input
                onChange={(e) => onHandleSearch(e.target.value)}
                type="text"
                placeholder={placeholder}
                icon='search'
            />
        </div>
    )
}

export default Search