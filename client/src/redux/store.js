import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {getProductsReducer,getProductsDetailsReducer} from './reducers/productReducer';


const reducer=combineReducers({

    getProducts:getProductsReducer,
    getProductsDetails:getProductsDetailsReducer
});
const middleware=[thunk];

const store= createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;