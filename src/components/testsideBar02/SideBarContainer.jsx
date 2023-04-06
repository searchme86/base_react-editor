import React from 'react';
import '../../App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './SideBar';
import Dashboard from '../../pages/Dashboard';
import About from '../../pages/About';
import Analytics from '../../pages/Analyitcs';
import Comment from '../../pages/Comment';
import Product from '../../pages/Product';
import ProductList from '../../pages/ProductList';

function SideBarContainer() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default SideBarContainer;
