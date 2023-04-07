import styled from 'styled-components';
import BtnSearchImg from '../../assets/images/btn_search.svg';

export const Button = styled.button`
  font-family: NotoSans, sans-serif;
  font-weight: var(--fw-r);
  font-size: var(--fs-xs);
  outline: none;
`;

export const SearchBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5b7eff;
  color: #ffffff;
  height: 32px;
  min-width: 90px;
  border-radius: 3px;
  padding: 0 5px;

  margin: 1%;
`;

export function SearchButton({ btnText }) {
  return (
    <SearchBtn>
      <div class='icon' />
      {btnText}
      <img
        src={BtnSearchImg}
        class='icon color_i'
        style={{ width: '13px', height: '13px', filter: 'invert(100%)' }}
      />
    </SearchBtn>
  );
}

export function ToggleButton({ btnText }) {
  return (
    <div class='toggle_wrap'>
      <span>{btnText}</span>
      <label class='check_toggle'>
        <input type='checkbox' checked />
        <div class='check_toggle_style'></div>
        <span class='toggle_t'>On</span>
        <span class='toggle_f'>Off</span>
      </label>
    </div>
  );
}
