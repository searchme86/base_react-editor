import React from 'react';
import { Routes, Route } from 'react-router';

import Layout from './Layout';

import DocumentManagement from './pages/document/DocumentManagement';
import DocumentCreateAndEdit from './pages/document/DocumentCeateAndEdit';
import DocumentAllEdit from './pages/document/DocumentAllEdit';
import CustomizedAgreement from './pages/document/CustomizedAgreement';

import ProductInfo from './pages/product/ProductInfo';
import ProductClassification from './pages/product/ProductClassification';
import ProductItem from './pages/product/ProductItem';

import DiseaseTypeTable from './pages/template/DiseaseTypeTable';
import InsuranceAgreement from './pages/template/InsuranceAgreement';
import LawTypeTable from './pages/template/LawTypeTable';
import TreatyManagement from './pages/template/TreatyManagement';

import Login from './pages/Login';
import Home from './pages/Home';
import Organization from './pages/organization/Organization';
import User from './pages/user/User';
import Settings from './pages/settings/Settings';
import Missing from './pages/Missing';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/:document/*">
          <Route path="management" element={<DocumentManagement />} />
          <Route path="edit" element={<DocumentCreateAndEdit />} />
          <Route path="allEdit" element={<DocumentAllEdit />} />
          <Route path="customized" element={<CustomizedAgreement />} />
        </Route>

        <Route path="/:product/*">
          <Route path="info" element={<ProductInfo />} />
          <Route path="class" element={<ProductClassification />} />
          <Route path="item" element={<ProductItem />} />
        </Route>

        <Route path="/:template/*">
          <Route path="treaty" element={<TreatyManagement />} />
          <Route path="disease" element={<DiseaseTypeTable />} />
          <Route path="law" element={<LawTypeTable />} />
          <Route path="insurance" element={<InsuranceAgreement />} />
        </Route>

        <Route path="/organization" element={<Organization />} />
        <Route path="/user" element={<User />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default Router;
