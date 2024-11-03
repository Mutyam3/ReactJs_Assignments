import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { store } from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'


const myRouter = createBrowserRouter([
                  {
                    path : '/',
                    element : <App/>,
                    children : [
                       {
                          path : '/home',
                          
                       }
                    ]
                  }, 
                 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
            <RouterProvider router={myRouter}>

            </RouterProvider>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();