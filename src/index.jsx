import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "purecss/build/pure.css"

//redux
// import thunk from "redux-thunk";
// import { createStore, compose, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import reducer from "./reducers/index";
// const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);
// const store = createStoreWithMiddleware(reducer);
//end

import App from "./App";

ReactDOM.render( <App />,document.getElementById("root")
);


// With Redux:
{/* <Provider store={store}>
<App />
</Provider>, 
 */}
