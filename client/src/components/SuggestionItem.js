import { Link } from 'react-router-dom'
import CartForm from './CartForm'
import { Modal, Button, Item } from 'semantic-ui-react'

function SuggestionItem({ suggestion, onDeleteSugg }) {

    function handleDelete(deletedId) {
        if(window.confirm('Are you sure you want to delete this suggestion?')) {
            fetch(`/suggestions/${deletedId}`, {
                method: "DELETE"
            })
              .then(() => {
                onDeleteSugg(deletedId)
              })
        } 
    }

    return (
        <Item>
            <Item.Image src={suggestion.image} size='tiny'/>
            <Item.Content>
                <Item.Header>
                    Suggestion from <Link to={`/users/${suggestion.user_id}`}>{suggestion.user_name}</Link>: {suggestion.name}
                </Item.Header>
                <Item.Meta>
                    submitted on {suggestion.created_at}
                </Item.Meta>
                <Modal
                    size="large"
                    trigger={<Button>View Suggestion</Button>}
                    >
                    <CartForm action='Add Suggested' cart={suggestion} />
                </Modal>
                {/* When admin clicks on view suggestion, all suggestion info should be sent to CartForm so admin can review and make any necessary edits */}
                {/* Admin should then be able to add the new cart OR cancel editing */}
                {/* Delete button will be on suggestion item */}
                <Button onClick={() => handleDelete(suggestion.id)}>Delete Suggestion</Button>
            </Item.Content>
        </Item>
    )
}

export default SuggestionItem