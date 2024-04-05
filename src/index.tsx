
import { render } from "react-dom";
import {legacy_createStore as createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import {thunk} from 'redux-thunk';

import App from "./App";
import reducer from "./redux/weather/reducer";

const store: Store<WeatherState, WeatherAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
