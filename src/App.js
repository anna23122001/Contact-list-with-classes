import React, { Component } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import { nanoid } from 'nanoid'

import './App.css'

export class App extends Component {
  state = {
    contactsForm: [],
    contactsForEdit: this.createEmptyContact(),
  };

  createEmptyContact() {
    return {
      id:'',
      firstName: '',
      lastName: '',
      email: '',
      phone:'',
    }
  }  

  addNewContact = () => {
    this.setState({
      contactsForEdit: this.createEmptyContact()
 })
}

  saveState(contactsForm){
    localStorage.setItem('contacts', JSON.stringify(contactsForm))
  }

  restoreState() {
    const data = localStorage.getItem('contacts');
    return data ? JSON.parse(data) : [];
  }

  componentDidMount(){
    this.setState({
     contactsForm: this.restoreState()
   })
  }

  deleteContact = (id) => {
    this.setState((state) => {
      const contactsForm = [...state.contactsForm.filter((contact) => contact.id !== id)
      ];
      this.saveState(contactsForm);
      return {
        contactsForm,
        contactsForEdit: this.createEmptyContact(),
      }
    })
  }

  createContact(contact) {
    contact.id = nanoid();
    this.setState((state) => {
      const contactsForm = [...state.contactsForm, contact];
       this.saveState(contactsForm);
      return {
        contactsForm,
        contactsForEdit: contact,
      }
  });
}
  
  updateContact(contact) {
  this.setState((state) => {
    const contactsForm = state.contactsForm.map((item) =>
      item.id === contact.id ? contact : item
);
      this.saveState(contactsForm);
  return {
      contactsForm,
      contactsForEdit: contact,
    }
  })
}

selectContact = (contact) => {
  this.setState({
    contactsForEdit: contact,
  })
}

saveContact = (contact) => {
  if (!contact.id) {
    this.createContact(contact);
  }else{
    this.updateContact(contact)
  }
}

  render() {
    return (
      <>
      <h1>Contact List</h1>
      <div className='main-container'>
        <ContactList 
           contacts = {this.state.contactsForm}
           onDelete={this.deleteContact}
           onAddContact={this.addNewContact}
           onEditContact={this.selectContact}
           />
        <ContactForm 
          key={this.state.contactsForEdit.id}
          contactsForEdit={this.state.contactsForEdit}
          onSubmit = {this.saveContact}
          onDelete = {this.deleteContact}
      />
      </div>
      </>
    )
  }
}

export default App