import React from 'react';
import SHOP_DATA from './2.2 shop.data.js'

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}

export default Shop