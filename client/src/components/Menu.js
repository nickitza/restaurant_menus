import React from 'react'
import ItemForm from './ItemForm'
import Items from './Items'


const Menu = ({ id, title, deleteMenu }) => (

  <div>
    <div>
      <h3>{title}</h3>
    </div>
    <Items />
    <ItemForm />
    <button
      onClick={() => deleteMenu(id)}
      style={{ margin: "5px", color: "red" }}> Delete Menu 
    </button>
  </div>
)

export default Menu