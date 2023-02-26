import React, { Component } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default class CreateExercises extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    }

    // bind functions to this object
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDuration = this.onChangeDuration.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() { // code runs before rendering
    this.setState({
      users: ['test user'],
      username: 'test user'
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.username
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.description
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.duration
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault(); // prevents default submit behavior

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise)
    window.location = '/'
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select 
              ref='userInput' 
              required 
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {
                this.state.users.map(user => {
                  return <option key={user} value={user}>{user}</option>
                })
              }
            </select>
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <input 
              type='text' 
              required 
              className='form-control' 
              value={this.state.description}
              onChange={this.onChangeDescription}
              >
            </input>
          </div>
          <div className='form-group'>
            <label>Duration: </label>
            <input 
              type='number' 
              required 
              className='form-control' 
              value={this.state.duration}
              onChange={this.onChangeDuration}
              >
            </input>
          </div>
          <div className='form-group'>
            <label>Date: </label>
            <div>
              <DatePicker 
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className='form-group'>
            <input type="submit" value='Create Exercise Log' className='btn-primary btn'/>
          </div>
        </form>
      </div>
    )
  }
}