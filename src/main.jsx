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
import { Toaster } from 'react-hot-toast';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import AllArtDetails from './Pages/AllArtDetails/AllArtDetails';
import UpdateArts from './Pages/UpdateArts/UpdateArts';
import AllArtMap from './components/AllArt/AllArtMap';
import ArtDefault from './components/MyArt/ArtDefault';
import CardDetails from './Pages/CraftItems/CardDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ArtCraftDetails from './Pages/ArtCraftDetails/ArtCraftDetails';

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
        loader: () => fetch('https://textile-arts-server.vercel.app/addCraft')
      },
      {
        path:"/addCraft",
        element: <PrivateRoute>
            <AddCraft></AddCraft>
        </PrivateRoute>
      },
      {
        path:"/artDefault",
        element:<PrivateRoute>
          <ArtDefault></ArtDefault>
        </PrivateRoute>,
        loader: () => fetch('https://textile-arts-server.vercel.app/addCraft')
      },
      {
        path:"/allArtDetails/:id",
        element:<PrivateRoute>
          <AllArtDetails></AllArtDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://textile-arts-server.vercel.app/addCraft/${params.id}`)
      },
      {
        path:"/updateArts/:id",
        element:<UpdateArts></UpdateArts>,
        loader: ({ params }) => fetch(`https://textile-arts-server.vercel.app/addCraft/${params.id}`)
      },
      {
        path: "/cardDetails/:id",
        element:<CardDetails></CardDetails>,
        loader: () => fetch("https://textile-arts-server.vercel.app/craftItem")
      },
      {
        path: "/artCraftDetails/:id",
        element:<ArtCraftDetails></ArtCraftDetails>,
        loader: () => fetch("https://textile-arts-server.vercel.app/craftItem")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <FirebaseProvider>
      <RouterProvider router={router} />
      <Toaster position='top-right'></Toaster>
     </FirebaseProvider>
  </React.StrictMode>,
)
