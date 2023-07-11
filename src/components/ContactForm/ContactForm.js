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
  this.setState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
}

  render() {
    return (
      <>
      <form className='form' onSubmit={this.onFormSubmit}>
    <div className='form-item-container'>
    <input className='input-item'
    type = 'text'
    name = 'firstName'
    value = {this.state.firstName}
    placeholder="Enter your name"
    onChange = {this.onInputChange}
    />
    <button 
    type ='button'
    className='input-delete'>
      X</button>
    </div>

      <div className='form-item-container'>
      <input className='input-item'
    type = 'text'
    name = 'lastName'
    value = {this.state.lastName}
    placeholder="Enter your surname"
    onChange = {this.onInputChange}
    />
    <button 
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
    type ='button'
    className='input-delete'>
      X</button>
      </div>
   
      <div className='form-item-container'>
      <input className='input-item'
    type = 'tel'
    name = 'phone'
    value = {this.state.phone}
    placeholder="Enter phone number"
    onChange = {this.onInputChange}
    />
    <button
    type ='button' 
    className='input-delete'>
    
      X</button>
      </div>
      <button 
   type='submit'
  className='new'>New</button>
  </form>
  <button 
    type ='button'
    className='save'
    onClick={this.props.onSave}
    >Save</button>
  <button 
  type ='button'
  className='delete'>Delete</button>
      </>
  

    )
  }
}

export default ContactForm