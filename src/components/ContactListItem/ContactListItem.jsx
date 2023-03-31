import { Item, ItemData, DeleteBtn } from './ContactListItem.styled';
import { BsPersonCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <Item>
      <BsPersonCircle />
      <ItemData>{name}</ItemData>
      <ItemData>{number}</ItemData>
      <DeleteBtn onClick={e => deleteContact(id)}>Delete</DeleteBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
