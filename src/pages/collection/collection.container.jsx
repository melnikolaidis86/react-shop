import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spiner.component";
import CollectionPage from "./collection.component";

const mapToStateProps = createStructuredSelector({
   isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapToStateProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
