import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import userReducer from "store/user/reducer";
import tagsReducer from "store/tags/reducer";
import urlsReducer from "store/urls/reducer";

import rootSaga from "./saga";

export default function configureStore(initialState = {}) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const rootReducer = combineReducers({
    user: userReducer,
    tags: tagsReducer,
    urls: urlsReducer,
  });

  const enhancers = [applyMiddleware(sagaMiddleware)];
  const composedEnhancers = composeWithDevTools(...enhancers);

  // mount it on the Store
  const store = createStore(rootReducer, initialState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
