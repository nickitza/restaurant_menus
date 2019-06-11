import React from 'react'
import Menu from './Menu'

const Menus = ({ menus, deleteMenu }) => (

  <div>
    {menus.map( menu =>
      <Menu 
      key = {menu.id}
      {...menu}
      deleteMenu={ deleteMenu }

      />
      )}
  </div>
)

export default Menus