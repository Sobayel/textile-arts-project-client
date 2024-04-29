import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Error from './components/Error/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AddCraft from './components/AddCraft/AddCraft';
import MyArt from './components/MyArt/MyArt';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import AllArtDetails from './Pages/AllArtDetails/AllArtDetails';
import UpdateArts from './Pages/UpdateArts/UpdateArts';
import AllArtMap from './components/AllArt/AllArtMap';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/allArtMap",
        element:<AllArtMap></AllArtMap>,
        loader: () => fetch('http://localhost:5000/addCraft')
      },
      {
        path:"/addCraft",
        element:<AddCraft></AddCraft>
      },
      {
        path:"/myArt",
        element:<MyArt></MyArt>
      },
      {
        path:"/allArtDetails/:id",
        element:<AllArtDetails></AllArtDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/addCraft/${params.id}`)
      },
      {
        path:"/updateArts",
        element:<UpdateArts></UpdateArts>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <FirebaseProvider>
     <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster position='top-right'></Toaster>
      </HelmetProvider>
     </FirebaseProvider>
  </React.StrictMode>,
)
