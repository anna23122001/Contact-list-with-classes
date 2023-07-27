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

  createEmptyContact(){
    return {
      id:'',
      firstName: '',
      lastName: '',
      email: '',
      phone:'',
    }
  }  

  componentDidMount(){
    const fromLocalStorage = JSON.parse(
      localStorage.getItem(
        'contacts')
    )
    if(!fromLocalStorage){
      this.setState({
        contactsForm: [],
      })
    }else{
      this.setState({
        contactsForm: [...fromLocalStorage]
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contactsForm))
  }

  deleteContact = (id) => {
    this.setState({
      contactsForm: [...this.state.contactsForm.filter((contact) => contact.id !==id)]
    })
  }

createContact(contact) {
  contact.id = nanoid();
  this.setState({
    contactsForm: [...this.state.contactsForm, contact],
    contactsForEdit: this.createEmptyContact(),
  });
}

updateContact(contact) {
  this.setState((state) => {
    const contactsForm = state.contactsForm.map((item) =>
    item.id === contact.id ? contact : item
    );
    return {
      contactsForm,
      contactForEdit: contact,
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
           onDelete = {this.deleteContact}
           onEditContact={this.selectContact}
           />
        <ContactForm 
          key={this.state.contactsForEdit.id}
          contacts = {this.state.contactsForm}
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