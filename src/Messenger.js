import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <h1>Send a message</h1>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contacts) => setTo(contacts)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  );
}

const contacts = [
  { name: "Jojo", email: "jojo@mail.com" },
  { name: "peppa", email: "peppa@mail.com" },
  { name: "Yoyo", email: "yoyo@mail.com" },
];
