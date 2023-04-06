import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router';

import Header from './components/Header';
import Navbar from './components/navbar/Navbar';

const PageContainer = styled.div`
  max-height: 100vh;
  height: 100%;
  min-width: 1200px;
`;

const MainContainer = styled.main`
  display: flex;
  height: calc(100vh - 48px);
`;

function Layout() {
  return (
    <PageContainer>
      <Header />
      <MainContainer>
        <Navbar />
        <Outlet />
      </MainContainer>
    </PageContainer>
  );
}

export default Layout;
