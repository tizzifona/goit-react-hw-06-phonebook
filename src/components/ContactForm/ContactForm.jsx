import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../Redux/contactsSlice';
import { selectContacts } from '../Redux/selector';
import { nanoid } from '@reduxjs/toolkit';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label className={css.contactLabel} htmlFor={nanoid()}>
        Name <br/>
      </label>
      <input
        className={css.contactInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.contactLabel} htmlFor={nanoid()}>
        Number<br/>
      </label>
      <input
        className={css.contactInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.contactButton} type='submit'>Add contact</button>
    </form>
  );
}
