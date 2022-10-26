import { Input, Menu } from 'semantic-ui-react'

function Search({ onHandleSearch, label, placeholder }) {

    return (
        <Menu.Item>
            <label htmlFor="search">Search {label}: </label>
            <Input
                onChange={(e) => onHandleSearch(e.target.value)}
                type="text"
                placeholder={placeholder}
                icon='search'
            />
        </Menu.Item>
    )
}

export default Search