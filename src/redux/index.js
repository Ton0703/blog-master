import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers'

let storeEnhancers
if (process.env.NODE_ENV === 'production') {
  storeEnhancers = compose(applyMiddleware(thunk))
} else {
  // storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk, logger)))
  storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)))
}

const configureStore = (initialState = {}) => {
    const store = createStore(reducer, initialState, storeEnhancers)
  
    if (module.hot && process.env.NODE_ENV !== 'production') {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        console.log('replacing reducer...')
        const nextRootReducer = require('./reducers').default
        store.replaceReducer(nextRootReducer)
      })
    }
  
    return store
  }
  
  export default configureStore()