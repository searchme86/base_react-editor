import styled from 'styled-components';
import BtnSearchImg from '../../assets/images/btn_search.svg';

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5b7eff;
  color: #ffffff;
  height: 32px;
  min-width: 90px;
  border-radius: 3px;
  padding: 0 5px;
  /* delete styles */
  border: none;
  margin: 1%;
  font-size: 11px;
`;

export function SearchButton({ btnText }) {
  return (
    <SearchBtn>
      <div class='icon' style={{ width: '13px', height: '13px' }} />
      {btnText}
      <img
        src={BtnSearchImg}
        class='icon color_i'
        style={{ width: '13px', height: '13px', filter: 'invert(100%)' }}
      />
    </SearchBtn>
  );
}
