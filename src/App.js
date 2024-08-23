import React, { useState } from 'react'
import Chat from './components/Chat';
import ContactList from './components/ContactList';
const contacts = [
  { id: 0, name: 'Lalit sharma', email: 'taylor@mail.com' },
  { id: 1, name: 'ca Mahesh sharma', email: 'alice@mail.com' },
  { id: 2, name: 'kriti senon', email: 'bob@mail.com' }
];
function App() {
  const [to, setTo] = useState(contacts[0])
  return (
    <div>
      <ContactList
       contacts ={contacts}
       selectedContact = {to}
       onSelect={contact => setTo(contact)}
      />

      <Chat key={to.id} contact={to}/>
    </div>
  )
}

export default App
