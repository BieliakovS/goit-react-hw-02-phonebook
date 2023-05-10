import React from 'react';
import css from './ContactList.module.css';

class ContactList extends React.Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li className={css.ContactListItem} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.ContactListButton}
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
