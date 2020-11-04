import React, {useState} from 'react';
import  SHOP_DATA from './Shop.data';


import CollectionPreview  from '../../components/collection-preview/CollectionPreview'

const Shop = () => {

  const [collectionsState, setCollectionsState] = useState(SHOP_DATA);



  return (
      <div className='shop-page'>
            {
                collectionsState.map(({id, ...collectionProps}) => {
                    return <CollectionPreview key={id} {...collectionProps}/>
                })
            }
      </div>
  )
}


export default Shop;