import { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import contactsList from 'utils/contactsList';

const App = () => {
  const [contacts, setContacts] = useState(() =>  JSON.parse(window.localStorage.getItem('contacts')) ?? contactsList);
  const [filter, setFilter] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify( contacts));
  }, [contacts]);

  // useEffect(() => {
  //   const contactsSaved = window.localStorage.getItem('contacts');
  //   const contacts = JSON.parse(contactsSaved) || contactsList;
  //   setContacts({ contacts });
  // });

  const isNameExists = newContact =>
  contacts.find(contact => contact.name === newContact.name);

const isNumberExists = newContact =>
  contacts.find(contact => contact.number === newContact.number);

const deleteContact = id => {
  setContacts(prevContacts => [...prevContacts.filter(contact => contact.id !== id)],
 );
};

  const formSubmitHandler = newContact => {
    let isName = isNameExists(newContact);
    let isNumber = isNumberExists(newContact);

    if (!isName & !isNumber) {
      setContacts(prevContacts => ([...prevContacts, newContact]));
      return;
    }
    alert(
      `This  ${isName ? `contact ${isName.name}` : ''} ${
        isNumber ? `number ${isNumber.number}` : ''
      } already exists`
    );

    //* option to re-write existent contacts
    // this.setState(prev => ({
    //   contacts: [
    //     ...prev.contacts.filter(
    //       contact =>
    //         contact.name !== newContact.name &&
    //         contact.number !== newContact.number
    //     ),
    //     newContact,
    //   ],
    // }));
    // console.log('App -> state:', this.state);
  };

  const changeFilter = evt => {
    const { value } = evt.target
    setFilter(value.toLowerCase());
  };

  const filterContacts = () => {
    console.log(contacts)
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

const filteredContacts = filterContacts()
console.log(filteredContacts)

  return (
    <Section>
      <Section title="Phonebook">
        <ContactForm formSubmitHandler={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 && (
          <>
            <Filter filter={filter} changeFilter={changeFilter} />
            <ContactList
              contacts={filteredContacts}
              deleteContact={deleteContact}
            />
          </>
        )}
      </Section>
      </Section>
  );
};

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   componentDidUpdate = prevState => {
//     const prevStateStr = JSON.stringify(prevState.contacts);
//     const curStateStr = JSON.stringify(this.state.contacts);
//     if (prevStateStr !== curStateStr) {
//       localStorage.setItem('contacts', curStateStr);
//     }
//   };

//   componentDidMount = () => {
//     const contactsSaved = localStorage.getItem('contacts');
//     const contacts = JSON.parse(contactsSaved) || contactsList;
//     this.setState({ contacts });
//   };

//   formSubmitHandler = newContact => {
//     let isName = this.isNameExists(newContact);
//     let isNumber = this.isNumberExists(newContact);

//     if (!isName & !isNumber) {
//       this.setState(prev => ({
//         contacts: [...prev.contacts, newContact],
//       }));
//       return;
//     }
//     alert(
//       `This  ${isName ? `contact ${isName.name}` : ''} ${
//         isNumber ? `number ${isNumber.number}` : ''
//       } already exists`
//     );

//     //* option to re-write existent contacts
//     // this.setState(prev => ({
//     //   contacts: [
//     //     ...prev.contacts.filter(
//     //       contact =>
//     //         contact.name !== newContact.name &&
//     //         contact.number !== newContact.number
//     //     ),
//     //     newContact,
//     //   ],
//     // }));
//     // console.log('App -> state:', this.state);
//   };

//   isNameExists = newContact =>
//     this.state.contacts.find(contact => contact.name === newContact.name);

//   isNumberExists = newContact =>
//     this.state.contacts.find(contact => contact.number === newContact.number);

//   deleteContact = id => {
//     this.setState(prev => ({
//       contacts: [...prev.contacts.filter(contact => contact.id !== id)],
//     }));
//   };

//   changeFilter = e => {
//     const { value } = e.target;

//     this.setState({ filter: value.toLowerCase() });
//   };

//   filterContacts = () => {
//     const { filter, contacts } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.filterContacts();

//     return (
//       <Box mx="auto" my={0} px="0" py={4} bg="container">
//         <Section title="Phonebook">
//           <ContactForm formSubmitHandler={this.formSubmitHandler} />
//         </Section>
//         <Section title="Contacts">
//           {this.state.contacts.length !== 0 && (
//             <>
//               <Filter filter={filter} changeFilter={this.changeFilter} />
//               <ContactList
//                 contacts={filteredContacts}
//                 deleteContact={this.deleteContact}
//               />
//             </>
//           )}
//         </Section>
//       </Box>
//     );
//   }
// }

export default App;
