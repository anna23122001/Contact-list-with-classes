import React, { Component } from 'react'
import './ContactForm.css'

export class ContactForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone:''
};

onInputChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

onFormSubmit = (event) => {
  event.preventDefault()
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone:this.state.phone
    })
}

onCreateNewForm = (event) => {
  event.preventDefault()
  this.setState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    id: ''
  });
}

onclearInputInfo = (fieldName) => {
  this.setState({
    [fieldName]: ''
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
    onClick = {() => this.onclearInputInfo('firstName')}
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
     onClick = {() => this.onclearInputInfo('lastName')}
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
     onClick = {() => this.onclearInputInfo('email')}
    type ='button'
    className='input-delete'>
      X</button>
      </div>
   
      <div className='form-item-container'>
      <input className='input-item'
    type = 'tel'
    name = 'phone'
    required={true}
    value = {this.state.phone}
    placeholder="Enter phone number"
    onChange = {this.onInputChange}
    />
    <button
     onClick = {() => this.onclearInputInfo('phone')}
    type ='button' 
    className='input-delete'>
      X</button>
      </div>

      <button 
    type ='submit'
    className='save'
    onClick={this.props.onSave}
    >Save</button>

 <button 
  type ='button'
  className='delete'>Delete</button>
  </form>

  <button 
  onClick={this.onCreateNewForm}
   type='button'
  className='new'>New</button>
      </>
    )
  }
}

export default ContactForm