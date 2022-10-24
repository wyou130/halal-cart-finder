import { Checkbox } from 'semantic-ui-react'

function Toggle({ onHandleShowAcceptsCard, isShowingAcceptsCard }) {

    return (
        <div>
            <label htmlFor="cards">Accepts Card</label>
            <Checkbox toggle
                type="checkbox"
                checked={isShowingAcceptsCard}
                onChange={onHandleShowAcceptsCard}
            />
        </div>
    )
}

export default Toggle