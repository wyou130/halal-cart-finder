import { Input, Checkbox, Dropdown } from 'semantic-ui-react'

function SortFilter({ onHandleSearch, onHandleShowAcceptsCard, isShowingAcceptsCard, onHandleSort, sortBy }) {

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
            text: 'Price Low-to-High',
            value: 'price'
        }
    ]

    return (
        <div>
            <div>
                <label htmlFor="sort">Sort By: </label>
                <Dropdown 
                    // name="sort" 
                    options={sortOptions}
                    value={sortBy}
                    onChange={(e) => onHandleSort(e.target.textContent)}
                />
                {/* <option></option>
                <option value="rating">Rating High-to-Low</option>
                <option value="price">Price Low-to-High</option> */}
                {/* </Dropdown> */}
            </div>
            <div>
                <label htmlFor="cards">Accepts Card</label>
                <Checkbox toggle
                    type="checkbox"
                    checked={isShowingAcceptsCard}
                    onChange={onHandleShowAcceptsCard}
                />
            </div>
            <div>
                <label htmlFor="search">Search Carts: </label>
                <Input
                    onChange={(e) => onHandleSearch(e.target.value)}
                    type="text"
                    placeholder="Search by cart name..."
                    icon='search'
                />
            </div>
        </div>
    )
}

export default SortFilter