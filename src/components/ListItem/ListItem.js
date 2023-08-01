import React, { Component } from 'react'
import './ListItem.css'

export class ListItem extends Component {

  onContactDelete = () => {
    this.props.onDelete(this.props.contact.id)
  }

  onContactEdit = () => {
    this.props.onEdit(this.props.contact)
  }

  render() {
   
    return (
      <div className='contact-item'
      onDoubleClick={this.onContactEdit}
      >
      <p className='content'
      > 
        {this.props.contact.firstName} {this.props.contact.lastName}
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