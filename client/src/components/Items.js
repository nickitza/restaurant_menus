import React from "react";
import Item from "./Item";

class Items extends React.Component {
  state = { items: [] };

  render() {
    return (
      <div>
        {this.state.items.map( item => 
          <Item
            key={item.id}
            {...item} />
        )}
      </div>
    );
  }
}

export default Items;
