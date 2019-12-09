/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SHOP_DATA from './2.2 shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
           collections.map(({ id, ...otherCollectionProps }) => (
             <CollectionPreview key={id} {...otherCollectionProps} />
           ))
        }
      </div>
    );
  }
}

export default ShopPage