import React from "react";
import ReactDom from "react-dom"
import {Provider} from "react-redux";
import App from "./components/app"
import ReactDOM from "react-dom/client";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>

        <App/>
    </Provider>
);
