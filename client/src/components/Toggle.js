import { Checkbox, Menu } from 'semantic-ui-react'

function Toggle({ onHandleShowAcceptsCard, isShowingAcceptsCard }) {

    return (
        <Menu.Item>
            <label htmlFor="cards">Accepts Card</label>
            <Checkbox toggle
                type="checkbox"
                checked={isShowingAcceptsCard}
                onChange={onHandleShowAcceptsCard}
            />
        </Menu.Item>
    )
}

export default Toggle