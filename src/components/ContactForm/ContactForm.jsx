import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { v4 as uuidv4 } from 'uuid';
import { InputLabel, AddBtn, Input } from './ContactForm.styled';

const ContactForm = ({formSubmitHandler}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

   const handleSubmitForm = evt => {
    evt.preventDefault();
    formSubmitHandler({ name, number,  id: uuidv4() });
    // console.log({ name, number,  id: uuidv4() })
    resetForm();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Box
        display="flex"
        flexDirection="column"
        mx="auto"
        my={4}
        px={6}
        py={4}
        bg="list"
        borderRadius="20px"
      >
        <InputLabel htmlFor='nameInputId'>Name</InputLabel>
        <Input
          type="text"
          name="name"
          id='nameInputId'
          placeholder="Enter Name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <InputLabel htmlFor="numberInput">Number</InputLabel>
        <Input
          type="tel"
          id="numberInput"
          placeholder="Enter Number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        />
        <AddBtn type="submit">Add contact</AddBtn>
      </Box>
    </form>
  );
};

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};

// class Form extends Component {

//   state = {
//     name: '',
//     number: '',
//   };

//  handleSubmitForm = evt => {
//   evt.preventDefault();
//   this.props.formSubmitHandler({ ...this.state, id: uuidv4() });
//   this.resetForm();
// };

// resetForm = () => {
//   this.setState({ name: '', number: '' });
// };

// render() {
//   return (
//     <form onSubmit={this.handleSubmitForm}>
//       <Box
//         display="flex"
//         flexDirection="column"
//         mx="auto"
//         my={4}
//         width={2}
//         px={6}
//         py={4}
//         bg="list"
//       >
//         <InputLabel htmlFor={this.nameInputId}>Name</InputLabel>
//         <Input
//           type="text"
//           name="name"
//           id={this.nameInputId}
//           placeholder="Enter Name"
//           value={this.state.name}
//           onChange={this.handleInputChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <InputLabel htmlFor={this.numberInputId}>Number</InputLabel>
//         <Input
//           type="tel"
//           id={this.numberInputId}
//           placeholder="Enter Number"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={this.state.number}
//           onChange={this.handleInputChange}
//         />
//         <AddBtn type="submit">Add contact</AddBtn>
//       </Box>
//     </form>
//   );
// }
// }

export default ContactForm;
