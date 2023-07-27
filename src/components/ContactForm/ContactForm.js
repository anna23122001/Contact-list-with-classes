import React, { Component } from 'react'
import './ContactForm.css'

export class ContactForm extends Component {
  state = {
  ...this.props.contactsForEdit,
};

createNewForm = () => {
 this.setState(
  { firstName: '',
    lastName: '',
    email: '',
    phone: '',
})}

onInputChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

onFormSubmit = (event) => {
  event.preventDefault()
    this.props.onSubmit({
     ...this.state,
    })
}

onclearInputInfo = (e) => {
  const sibling = e.target.parentNode.firstChild;
  this.setState({
    [sibling.name]: '',
  })
}


onContactDelete = (event) => {
  event.stopPropagation();
  this.props.onDelete(this.props.contactsForEdit.id); 
  this.setState({
    ...this.createNewForm(),
  })
}

  render() {
    return (
      <>
      <form className='form' onSubmit={this.onFormSubmit}>
        <div className='form-item-container'>
          <input className='input-item'
            type = 'text'
            name = 'firstName'
            required={true}
            value = {this.state.firstName}
            placeholder="Enter your name"
            onChange = {this.onInputChange}
    />
    <button 
    onClick = {this.onclearInputInfo}
    type ='button'
    className='input-delete'>
      X</button>
    </div>

      <div className='form-item-container'>
      <input className='input-item'
              type = 'text'
              name = 'lastName'
              required={true}
              value = {this.state.lastName}
              placeholder="Enter your surname"
              onChange = {this.onInputChange}
    />
      <button 
          onClick = {this.onclearInputInfo}
          type ='button'
          className='input-delete'>
      X</button>
      </div>

      <div className='form-item-container'>
      <input className='input-item'
                type = 'email'
                name = 'email'
                value = {this.state.email}
                placeholder="Enter your email"
                onChange = {this.onInputChange}
    />
    <button 
     onClick = {this.onclearInputInfo}
    type ='button'
    className='input-delete'>
      X</button>
      </div>
   
      <div className='form-item-container'>
      <input className='input-item'
                type = 'text'
                name = 'phone'
                required={true}
                value = {this.state.phone}
                placeholder="Enter phone number"
                onChange = {this.onInputChange}
    />
    <button
          onClick = {this.onclearInputInfo}
          type ='button' 
          className='input-delete'>
      X</button>
      </div>

      <button 
    type ='submit'
    className='save'
    onClick={this.onSubmit}
    >Save</button>

 <button 
  type ='button'
  className='delete'
  onClick={this.onContactDelete}
  >Delete</button>
  </form>

  <button 
  onClick={this.createNewForm}
   type='button'
  className='new'>New</button>
      </>
    )
  }
}

export default ContactForm