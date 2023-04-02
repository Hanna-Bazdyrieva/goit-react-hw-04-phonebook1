import { useState, useEffect } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import contactsList from 'utils/contactsList';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsList
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isNameExists = newContact =>
    contacts.find(contact => contact.name === newContact.name);

  const isNumberExists = newContact =>
    contacts.find(contact => contact.number === newContact.number);

  const deleteContact = id => {
    setContacts(prevContacts => [
      ...prevContacts.filter(contact => contact.id !== id),
    ]);
  };

  const formSubmitHandler = newContact => {
    let isName = isNameExists(newContact);
    let isNumber = isNumberExists(newContact);

    if (!isName & !isNumber) {
      setContacts(prevContacts => [...prevContacts, newContact]);
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
    const { value } = evt.target;
    setFilter(value.toLowerCase());
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filteredContacts = filterContacts();

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

export default App;
