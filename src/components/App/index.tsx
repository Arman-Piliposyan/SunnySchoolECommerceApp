import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';

import { ProductDetails } from '../../pages/ProductDetails';
import { ShoppingCart } from '../../pages/ShoppingCart';
import { ProductList } from '../../pages/ProductList';
import { MyProfile } from '../../pages/MyProfile';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';
import { SignUp } from '../../pages/SignUp';
import { SignIn } from '../../pages/SignIn';
import { Orders } from '../../pages/Orders';
import { Admin } from '../../pages/Admin';
import { Layout } from '../Layout';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicRoute />} path="/">
            <Route element={<Navigate to="sign-in" />} path="/" />
            <Route element={<SignIn />} path="sign-in" />
            <Route element={<SignUp />} path="sign-up" />
          </Route>

          <Route
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
            path="/"
          >
            <Route element={<MyProfile />} path="my-profile" />
            <Route element={<ProductList />} path="product-list" />
            <Route element={<ProductDetails />} path="product-details" />
            <Route element={<ShoppingCart />} path="shopping-cart" />
            <Route element={<Orders />} path="orders" />
            <Route element={<Admin />} path="admin" />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
