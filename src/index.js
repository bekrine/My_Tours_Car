import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App';
import ErrorPage from './view/error/ErrorPage';
import AddCar from './view/AddCar';
import UplaodPhoto from './view/UplaodPhoto';
import Client from  './view/AddClientForm/Client'
import SecondDriver from  './view/AddClientForm/SecondDriver'
import CarRentalContract from  './view/AddClientForm/CarRentalContract'
import Maintenance from './view/maintenanceForm/Maintenance';
import Print from './view/print/Print';
import BadeClient from './view/badeClient/BadeClient';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/addCarInfo',
        element:<AddCar/>
      },
      {
        path:'/addCarImage',
        element:<UplaodPhoto/>
      },
      {
        path:'/addClient',
        element:<Client/>
      },
      {
        path:'/addseconddriver',
        element:<SecondDriver/>
      },
      {
        path:'/addcontract',
        element:<CarRentalContract/>
      }
      ,
      {
        path:'/maintenanc',
        element:<Maintenance/>
      }
      ,
      {
        path:'/print',
        element:<Print/>
      }
      ,
      {
        path:'/mauviseClient',
        element:<BadeClient/>
      }
    ]
  },
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

