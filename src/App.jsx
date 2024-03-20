import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
// import Products from './components/Products';
// import Counter from './components/Counter';
import Home from './pages/Home';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProductDetails from './pages/ProductDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/:userId' element={<ProfileDetails />} />
        <Route path='products/:productId' element={<ProductDetails />} />
        <Route path='*' element={<p>Page Not Found</p>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
