import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background: #2c3240;
`;

const HeaderLeftSection = styled.div`
  display: flex;
`;

const HeaderCenterSection = styled.div``;
const HeaderRightSection = styled.div``;

const HeaderLogo = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeftSection>
        <HeaderLogo>
          <Logo width="15" height="15" />
        </HeaderLogo>
        <div className="">
          <select>
            <option>ddd</option>
          </select>
        </div>
      </HeaderLeftSection>
      <HeaderCenterSection></HeaderCenterSection>
      <HeaderRightSection>버튼, 버튼,버튼</HeaderRightSection>
    </HeaderContainer>
  );
}

export default Header;
