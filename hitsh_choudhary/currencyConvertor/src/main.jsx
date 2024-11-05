import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import InputBox from './component/InputBox.jsx'
import RouterProvider from 'react-router-dom'

const router = createBrowserRouter();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <App /> */}
    {/* <InputBox /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


// https://github.com/fawazahmed0/currency-api/blob/1/latest/currencies.json