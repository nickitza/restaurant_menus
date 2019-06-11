import React from 'react'

class MenuForm extends React.Component{
  state= { title: "" }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMenu(this.state.title)
    this.setState({ title: '', })
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        Add a Menu: <input 
        type="text"
        label="Menu"
        placeholder="Menu Title"
        required
        value={ this.state.title }
        onChange={ this.handleChange }>
        </input>
      </form>
    )
  }
}

export default MenuForm