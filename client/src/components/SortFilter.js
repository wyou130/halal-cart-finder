import { useState } from "react"

function SortFilter({ onHandleSearch, onHandleShowAcceptsCard, isShowingAcceptsCard }) {

    return (
        <div>
            <div>
                <label htmlFor="sort">Sort By: </label>
                <select 
                    name="sort" 
                    // onChange={handleSortChange}
                >
                <option></option>
                <option value="ratings">Ratings High-to-Low</option>
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