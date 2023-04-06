import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Navbar() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">
            <div className="">
              {/* 이미지 */}
              <span>홈</span>
            </div>
          </Link>
        </li>
        {/* 문서 */}
        <li>
          <Link to="/">
            <div className="">
              {/* 이미지 */}
              <span>문서</span>
            </div>
          </Link>
          <div className="subMenu">
            <div className="">
              {/* 이미지 */}
              <span>기초서류관리</span>
            </div>
            <ul>
              <li>
                <Link to="/document/management">
                  <div className="">
                    {/* 이미지 */}
                    <span>[서브타이틀] 문서관리 </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/document/edit">
                  <div className="">
                    {/* 이미지 */}
                    <span>[서브타이틀] 문서작성편집</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/document/allEdit">
                  <span>[서브타이틀] 문서일괄편집</span>
                </Link>
              </li>
              <li>
                <Link to="/document/customized">
                  <span>[서브타이틀] 맞춤형 약관</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* 상품 */}
        <li>
          <Link to="/">
            <span>상품</span>
          </Link>
          <div className="subMenu">
            <div className=""></div>
            <ul>
              <li>
                <Link to="/product/info">
                  <span>[서브타이틀] 상품 정보관리</span>
                </Link>
              </li>
              <li>
                <Link to="/product/class">
                  <span>[서브타이틀] 상품 분류관리</span>
                </Link>
              </li>
              <li>
                <Link to="/product/item">
                  <span>[서브타이틀] 상품 항목관리</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* 템플릿 */}
        <li>
          <Link to="/">
            <div className="">
              {/* 이미지 */}
              <span>템플릿 관리</span>
            </div>
          </Link>
          <div className="subMenu">
            <div className=""></div>
            <ul>
              <li>
                <Link to="/template/treaty">
                  <span>[서브타이틀] 특약관리</span>
                </Link>
              </li>
              <li>
                <Link to="/template/disease">
                  <span>[서브타이틀] 분류표 관리</span>
                </Link>
              </li>
              <li>
                <Link to="/template/law">
                  <span>[서브타이틀] 서식관리</span>
                </Link>
              </li>
              <li>
                <Link to="/template/insurance">
                  <span>[서브타이틀] 표준약관관리</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/organization">
            <span>조직</span>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/user">
            <div className="">
              {/* 이미지 */}
              <span>유저등록</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <div className="">
              {/* 이미지 */}
              <span>환경설정</span>
            </div>
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Navbar;
