import React from 'react';
import { SearchButton } from '../../components/buttons/Button';

function ProductInfo() {
  return (
    <div>
      <p>상품정보 컴포넌트 입니다.</p>
      <SearchButton btnText='검색' />
      <SearchButton btnText='검색 초기화' />
    </div>
  );
}

export default ProductInfo;
