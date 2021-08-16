import { 
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/01-authReducer';
import { notesReducer } from '../reducers/02-notesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    notes: notesReducer,
}); // Combina varios reducers para poder pasarle varios reducers al store.


export const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    ),
); // Crea el Store del Redux, pero solamente puede recibir un reducer