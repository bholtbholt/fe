import React, { Component } from 'react';

class Shelf extends Component {
  onClickAdd = this.onClickAdd.bind(this);

  state = {
    shelfItems: [
      'shampoo',
      'chocolate',
      'yogurt'
    ]
  }

  onClickAdd(item) {
    this.props.addItem(item);
  }

  render() {
    const shelfItems = this.state.shelfItems.map((item, index) => {
      return <li key={index}><button onClick={()=>this.onClickAdd(item)}>Add</button>{item}</li>
    });

    return (
      <div>
        <h1>Shelf</h1>
        <ul>
          {shelfItems}
        </ul>
      </div>
    );
  }
}

export default Shelf;
