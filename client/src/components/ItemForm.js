import React from 'react'

class ItemForm extends React.Component{
  state= { name: "" }

  // handleChange = (e) => {
  //   this.setState({name: e.target.value })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.addMenu(this.state.name)
  //   this.setState({name: '', })
  // }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        Add Items To Menu: <input 
        type="text"
        label="Items"
        placeholder="Item"
        required
        value={ this.state.name }
        onChange={ this.handleChange }>
        </input>
      </form>
    )
  }
}

export default ItemForm