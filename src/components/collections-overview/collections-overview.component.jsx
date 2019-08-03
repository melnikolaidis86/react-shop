import React from 'react';
import { connect } from  'react-redux';
import { createStructuredSelector } from "reselect";

import './collections-overview.styels.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapToStateProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapToStateProps)(CollectionsOverview);

