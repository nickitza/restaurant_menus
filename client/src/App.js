import React from "react";
import Menus from "./components/Menus"
import MenuForm from "./components/MenuForm"
import axios from 'axios'


class App extends React.Component {
  state= { menus: [] }

  componentDidMount(){
    axios.get('/api/menus')
      .then(res => {
        this.setState({ menus: res.data })
      })
        .catch (err => {
          console.log("error")
        })
  }
  addMenu = (title) => { 
    axios.post('/api/menus', { title: title} )
    .then(res => {
      this.setState({ menus: [...this.state.menus, res.data] })
    })
  }

  updateMenu = (id) => {
    axios.put(`/api/menus/${id}`)
    .then( res => {
      const menus = this.state.menus.map(i => {
        if (i.id === id)
        return res.data
      return i
      })
      this.setState( {menus} )
    })
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then(res =>{
      const { menus, } = this.state
      this.setState({ menus: menus.filter( i => i.id !== id),})
    })
  }

  render() {
    return (
    <div>
      <header>
       <h1>Menus with React/Rails</h1>
      </header>
      <hr />
      <h2> Menus </h2>
      <Menus 
        menus= { this.state.menus }
        deleteMenu={ this.deleteMenu }/>
     <hr />
      <MenuForm addMenu={ this.addMenu }/>
    </div>
    );
  }
}

export default App;
