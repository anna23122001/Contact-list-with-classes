import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem' 
import './ContactList.css'

export class ContactList extends Component {
  render() {
    return (
        <>
    <div className='list-container'>
    {this.props.contacts.map((contact) => {
        return (
    <ListItem
      key = {contact.id}
      contact = {contact}
      onDelete = {this.props.onDelete}
      onEdit={this.props.onEditContact}
      />
        )
    })}
          <button 
  onClick={this.props.onAddContact}
  className='new'>New</button>
      </div>
        </>
     
    )
  }
}

export default ContactList