function SortFilter({ onHandleSearch, onHandleShowAcceptsCard, isShowingAcceptsCard, onHandleSort }) {

    return (
        <div>
            <div>
                <label htmlFor="sort">Sort By: </label>
                <select 
                    name="sort" 
                    onChange={(e) => onHandleSort(e.target.value)}
                >
                <option></option>
                <option value="rating">Rating High-to-Low</option>
                <option value="price">Price Low-to-High</option>
                </select>
            </div>
            <div>
                <label htmlFor="cards">Accepts Card</label>
                <input
                    type="checkbox"
                    checked={isShowingAcceptsCard}
                    onChange={onHandleShowAcceptsCard}
                />
            </div>
            <div>
                <label htmlFor="search">Search Carts: </label>
                <input
                    onChange={(e) => onHandleSearch(e.target.value)}
                    type="text"
                    placeholder="Type a cart name to search..."
                />
            </div>
        </div>
    )
}

export default SortFilter