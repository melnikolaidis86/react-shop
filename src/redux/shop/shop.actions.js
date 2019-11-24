import ShopActionTypes from "./shop.types";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());

      // Access firebase through rest api
      // fetch('https://firestore.googleapis.com/v1/projects/mycrown-db/databases/(default)/documents/collections')
      //     .then(response => response.json())
      //     .then(collections => console.log(collections));

      collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap));
      }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
};

