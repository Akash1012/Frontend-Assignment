import React from 'react';
import CollectionItem from '../Component/collectionItem/collection-item.component';
import './collection.style.scss';

class CollectionPage extends React.Component {

    render() {
        const { SHOP_DATA } = this.props
        return (
            <div className='collection-page'>
                <h2 className='title'>Hey</h2>
                <div className="items">
                    {
                        SHOP_DATA.map(item => {
                            return <CollectionItem key={item.price + Math.random()} item={item} />
                        })
                    }
                </div>
            </div>
        )
    }
}


export default CollectionPage