import React from "react";
import Menus from "./components/Menus"
import axios from 'axios'


class App extends React.Component {
 state= { menus: [] }

  componentDidMount(){

  }
  addMenu = (title) => { 

  }

  updateMenu = (id) => {

  }

  deleteMenu = (id) => {

  }

  render() {
    return (
    <div>
     <header>
       <h1>Menus with React/Rails</h1>
       <hr />
     </header>
     <Menus 
     menus= { this.state.menus }/>
    </div>
    );
  }
}

export default App;
