import { Dropdown, Menu } from 'semantic-ui-react'

function Sort({ onHandleSort, sortOptions }) {

    return (
        <Menu.Item>
            <label htmlFor="sort">Sort By: </label>
            <Dropdown 
                options={sortOptions}
                onChange={(e) => onHandleSort(e.target.textContent)}
            />
        </Menu.Item>
    )
}

export default Sort