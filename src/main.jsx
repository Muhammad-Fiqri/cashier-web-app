import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import EditProduct from './edit product/EditProduct.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import store from './redux store/store.js';
import { Provider } from 'react-redux'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/EditProduct",
        element: <EditProduct />,
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>);
