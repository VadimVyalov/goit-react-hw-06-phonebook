import React from 'react';
//import { useLS } from './Tools/useLS';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Container from './Container';

//const KEY = 'phonebook_contacts';

export const App = () => {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useLS(KEY);

  // const onAddContact = (name, number) => {
  //   setContacts(contacts => [...contacts, { id: nanoid(10), name, number }]);
  // };

  // const onRemoveContact = id => {
  //   setContacts(contacts => [...contacts.filter(contact => contact.id !== id)]);
  // };

  // const onChangeFilter = evt => {
  //   setFilter(evt.target.value.toLowerCase());
  // };

  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};
