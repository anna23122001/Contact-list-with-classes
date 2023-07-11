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

// проверка с оператором || для того,
// чтобы при нажатии на save с пустой строкой
//  не появлялся пустой контакт, но чтобы предыдущие контакт 
//  отправился на localStorage или при удалении контакта из списка
// данные в localStorage обновились и 
// удаленный контакт удалился из хранилища


onFormSubmit = (event) => {
  event.preventDefault()
  if(this.state.firstName !== '' || 
  this.state.lastName !== '' || 
  this.state.email !== '' || 
  this.state.phone !== '' 
  ){
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone:this.state.phone
    })
  }
  
}
onCreateNewForm = (event) => {
  event.preventDefault()
  this.setState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
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