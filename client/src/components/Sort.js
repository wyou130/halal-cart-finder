import { Dropdown } from 'semantic-ui-react'

function Sort({ onHandleSort, sortOptions }) {

    return (
        <div>
            <div>
                <label htmlFor="sort">Sort By: </label>
                <Dropdown 
                    options={sortOptions}
                    onChange={(e) => onHandleSort(e.target.textContent)}
                />
            </div>
        </div>
    )
}

export default Sort