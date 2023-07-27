import React, { Component } from 'react'
import './ListItem.css'

export class ListItem extends Component {
  onContactShow = (event) => {
    event.stopPropagation();
    this.props.onChange(this.props.contact.id)
  }

  onContactDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id)
  }

  render() {
    const contact = this.props.contact;
    return (
      <div className='contact-item'
    
      >
      <p className='content'> 
        {contact.firstName} {contact.lastName}
      </p>
      <span
      className='delete-btn'
      onClick={this.onContactDelete}
      >
        X</span>
      </div>
    )
  }
}

export default ListItem