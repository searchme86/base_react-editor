import React from 'react';
import Toggle from '../../components/buttons/Toggle';
import { SearchButton, ToggleButton } from '../../components/buttons/Buttons';

function ProductInfo() {
  return (
    <div>
      <p>상품정보 컴포넌트 입니다.</p>
      <SearchButton btnText='검색' />
      <SearchButton btnText='검색 초기화' />
      <ToggleButton btnText='판매상품만 보기' />
      <Toggle title={'판매상품만 보기'} />
    </div>
  );
}

export default ProductInfo;
