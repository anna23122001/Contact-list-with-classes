import React, { Component } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import { nanoid } from 'nanoid'

import './App.css'

export class App extends Component {
  state = {
    contactsForm: [
    ]
  }

  addContact = (newContact) => {
    newContact.id = nanoid();
    this.setState((lastState) => ({
      contactsForm: [...lastState.contactsForm, newContact]
    }));
  }

  deleteContact = (id) => {
    this.setState({
      contactsForm: [...this.state.contactsForm.filter((contact) => contact.id !==id)]
    })
  }

saveContact = () => {
  localStorage.setItem('contacts', JSON.stringify(this.state.contactsForm))
}

componentDidMount(){
  const fromLocalStorage = JSON.parse(
    localStorage.getItem(
      'contacts',
      JSON.stringify(this.state.contactsForm)
    )
  )
  if(!fromLocalStorage){
    this.setState({
      contactsForm: this.state.contactsForm
    })
  }else{
    this.setState({
      contactsForm: [...fromLocalStorage]
    })
  }
}

  render() {
    return (
      <>
      <h1>Contact List</h1>
      <div className='main-container'>
      <ContactList 
      contacts = {this.state.contactsForm}
      onDelete = {this.deleteContact}/>
      <ContactForm contacts = {this.state.contactsForm}
      onSubmit = {this.addContact}
      onSave = {this.saveContact}
      />
      </div>
      
      </>
    )
  }
}

export default App