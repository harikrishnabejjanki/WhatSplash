import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import RootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
const sagaMiddleWare = createSagaMiddleware();

const store = createStore(RootReducer, compose(applyMiddleware(sagaMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddleWare.run(rootSaga);


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <ImageGrid />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
