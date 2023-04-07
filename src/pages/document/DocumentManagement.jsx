import React from 'react';
import { SearchButton } from '../../components/buttons/Buttons';
import Toggle from '../../components/buttons/Toggle';

function DocumentManagement() {
  return (
    <div>
      <p>문서관리 컴포넌트 입니다.</p>
      <SearchButton btnText='검색' />
      <Toggle title={'리스트로 보기'} />
    </div>
  );
}

export default DocumentManagement;
