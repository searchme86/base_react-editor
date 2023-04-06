import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body,  *{
        margin:0; padding:0; box-sizing:border-box;
        font-family:'Noto Sans KR', 'Roboto', 'Roboto Mono', sans-serif, monospace;
        font-size:16px;
    }
    a{ text-decoration:none;}
    ul, li{ list-style:none;}
    fieldset{border:0; font-size:0; margin:0; padding:0;}
    legend { border: 0;  padding: 0;  margin:0;}
    textarea { overflow: auto; }
    optgroup { font-weight: bold; }
    table { border-collapse: collapse; border-spacing: 0; }
    td, th { padding: 0; }
    button{ text-transform:none; border:0; outline:none; cursor:pointer;}
    -ms-overflow-style: none;
    ::-webkit-scrollbar {display: none;}

    @font-face {
    font-display: block;
    font-family: "NotoSans";
    font-weight: 400;
    src: local("NotoSansKR"),
        url("../fonts/NotoSansKR-Regular.woff2") format("woff2"),
        url("../fonts/NotoSansKR-Regular.woff") format("woff"),
        url("../fonts/NotoSansKR-Regular.otf") format("otf");
    }

    @font-face {
    font-display: block;
    font-family: "NotoSans";
    font-weight: 500;
    src: local("NotoSansKR"),
        url("../fonts/NotoSansKR-Medium.woff2") format("woff2"),
        url("../fonts/NotoSansKR-Medium.woff") format("woff"),
        url("../fonts/NotoSansKR-Medium.otf") format("otf");
    }

    @font-face {
    font-display: block;
    font-family: "NotoSans";
    font-weight: 600;
    src: local("NotoSansKR"),
        url("../fonts/NotoSansKR-Bold.woff2") format("woff2"),
        url("../fonts/NotoSansKR-Bold.woff") format("woff"),
        url("../fonts/NotoSansKR-Bold.otf") format("otf");
    }

    :root {
    --black: #000000;
    --gray1: #f6f6f6;
    --gray2: #f3f3f3;
    --gray3: #e5e4e4;
    --gray4: #e0e0e0;
    --gray5: #979798;
    --gray6: #333333;

    --navy1: #3f5e7d;
    --navy2: #344d67;
    --navy3: #2d4157;
    --navy4: #2c3240;

    --list: #f2f4f6;
    --white: #ffffff;
    --line: rgba(255, 255, 255, 0.2);
    --blue: #5b7eff;
    --yellow: #ffaa00;

    --light-hover: #e6e7e9;
    --light-press: #ced0d4;

    --dark-hover: #18699d;

    --list-hover: #e0f3fd;
    --list-press: #c2e7fb;
    --list-select: #c3dff2;

    --fs-l: 16px;
    --fs-m: 14px;
    --fs-s: 12px;
    --fs-xs: 11px;

    --fw-b: 700;
    --fw-m: 500;
    --fw-r: 400;
    }

    * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    font-size: var(--fs-xs);
    }
    *,
    :after,
    :before {
    box-sizing: border-box;
    flex-shrink: 0;
    }

    html,
    body {
    height: 100%;
    }

    .main_body {
    max-height: 100vh;
    height: 100%;
    min-width: 1200px;
    }

    img,
    picture,
    video,
    canvas,
    svg {
    display: block;
    max-width: 100%;
    }
    button {
    background: none;
    border: 0;
    cursor: pointer;
    }
    a {
    text-decoration: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    ol,
    li {
    list-style: none;
    }
    ol,
    ul,
    li {
    margin: 0;
    padding: 0;
    }
    fieldset {
    border: none;
    }

    body,
    button,
    input,
    select,
    table,
    textarea {
    color: var(--black);
    font-family: "NotoSans", sans-serif;
    font-weight: var(--fw-r);
    font-size: var(--fs-xs);
    outline: none;
    }

    option {
        color: var(--black);
    }

    textarea {
    display: block;
    }

    body.modalopen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    }

    section.base_pd {
    padding: 12px 10px 20px;
    }

    .fx_c {
    display: flex;
    align-items: center;
    }

    /* form */

    select {
    appearance: none;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    margin: 0;
    }

    textarea:focus::placeholder,
    input[type="password"]:focus::placeholder,
    input[type="number"]:focus::placeholder,
    input[type="text"]:focus::placeholder {

    }

    input[type="checkbox"],
    input[type="radio"] {
        position: absolute;
        opacity: 0;
        left: 0;
        bottom: 0;
        pointer-events: none;
    }

    .input_style{
        padding: 0 5px;
        height: 28px;
        border: 1px solid var(--gray5);
        background-color: var(--white);
    }

    textarea {
        padding: 5px;
        resize: none;
        border: 1px solid var(--gray5);
        background-color: var(--white);

    }

    /* select */
    .select_style {
    background: url("../image/icon/select_arrow.svg") center no-repeat;
    background-size: 8px;
    outline: 0 none;
    cursor: pointer;
    height: 28px;
    border: 1px solid var(--gray5);
    background-color: var(--white);
    padding: 0 8px 0 5px;
    background-position: calc(100% - 8px) center;
    }

    .select_s {
    background: url("../image/icon/select_arrow_s.svg") center no-repeat;
    background-position: calc(100% - 5px) center;
    padding: 0 5px;
    background-size: 8px;
    outline: 0 none;
    cursor: pointer;
    height: 20px;
    border: 1px solid var(--gray5);
    background-color: var(--white);
    width: 50px;
    text-align: center;
    border-radius: 10px;
    font-size: var(--fs-xs);
    }

    select option {
    padding: 5px 0;
    }

    select:required:invalid {
    color: gray;
    }

    .radio_label,
    .check_label {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    user-select: none;
    }

    .check_style {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border: 1px solid var(--gray5);
    border-radius: 2px;
    background-color:var(--white);
    }

    .check_style img {
    display: none;
    width: 10px;
    height: 10px;
    }

    .check_label input[type="checkbox"]:checked + .check_style img{
    display: block;
    }

    .check_label input[type="checkbox"]:checked + .check_style {
    background-color: var(--blue);
    border: none;
    }

    .check_label span {
    margin-left: 6px;
    }
    /* 토글 */
    .check_toggle {
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    }

    .check_toggle_style {
    width: 30px;
    height: 16px;
    border-radius: 8px;
    background-color: #cccdd1;
    padding: 2px;
    position: relative;
    }

    .check_toggle_style ~ span {
    margin-left: 5px;
    user-select: none;
    color: var(--gray6);
    }

    .check_toggle_style ~ .toggle_t {
    display: none;
    }

    .check_toggle_style::after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: var(--white);
    position: absolute;
    left: 2px;
    transition: 0.2s;
    }

    .check_toggle input[type="checkbox"]:checked + .check_toggle_style {
    background-color: var(--blue);
    }

    .check_toggle input[type="checkbox"]:checked + .check_toggle_style::after {
    transform: translate(14px, 0);
    }

    .check_toggle input[type="checkbox"]:checked ~ .toggle_t {
    display: block;
    }
    .check_toggle input[type="checkbox"]:checked ~ .toggle_f {
    display: none;
    }

    /* 라디오 박스 */
    .radio_label span {
    margin-left: 5px;
    }

    .radio_style {
    width: 14px;
    height: 14px;
    border: 1px solid var(--navy);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    border: 1px solid var(--gray5);
    }

    .radio_style::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: var(--blue);
    display: none;
    }

    .radio_label input[type="radio"]:checked + .radio_style::after {
    display: block;
    }


    input[type="date"]{
    height: 28px;
    border-radius: none;
    border: 1px solid var(--gray5);
    padding: 0 5px;
    cursor: pointer;
    background-color: var(--white);
    }
    input[type='date']::before {
    content: attr(data-placeholder);

    width: calc(100% - 16px);
    color: gray;
    }
    input[type='date']:hover::before,
    input[type='date']:focus::before,
    input[type='date']:valid::before {
    display: none;
    }

    /* 업로드 박스 */
    .upload_box {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
    height: 28px;
    border: 1px solid var(--gray5);
    background-color: var(--white);
    }

    .upload_box .upload_btn {
    padding: 4px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    }

    .upload_box input[type="text"] {
    flex-grow: 1;
    flex-shrink: 1;
    background-color: transparent;
    border: none;
    height: 100%;
    pointer-events: none;
    }

    .upload_box .upload_btn input[type="file"] {
    display: none;
    }


    .fields {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    .fields > * {
    width: calc(50% - 5px)
    }
    /* 로딩 */

    .loader {
    display:none;
    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    font-size: 8px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    -webkit-animation: load5 1.1s infinite ease;
    animation: load5 1.1s infinite ease;
    pointer-events: none;
    transform: translate(-50%, -50%);
    }


    .loader.on {
        display:block;
    }

    @-webkit-keyframes load5 {
    0%,
    100% {
        box-shadow: 0em -2.6em 0em 0em #344d67, 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.5), -1.8em -1.8em 0 0em rgba(52,77,103, 0.7);
    }
    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.7), 1.8em -1.8em 0 0em #344d67, 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.5);
    }
    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.5), 1.8em -1.8em 0 0em rgba(52,77,103, 0.7), 2.5em 0em 0 0em #344d67, 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.5), 2.5em 0em 0 0em rgba(52,77,103, 0.7), 1.75em 1.75em 0 0em #344d67, 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.5), 1.75em 1.75em 0 0em rgba(52,77,103, 0.7), 0em 2.5em 0 0em #344d67, -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.5), 0em 2.5em 0 0em rgba(52,77,103, 0.7), -1.8em 1.8em 0 0em #344d67, -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.5), -1.8em 1.8em 0 0em rgba(52,77,103, 0.7), -2.6em 0em 0 0em #344d67, -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.5), -2.6em 0em 0 0em rgba(52,77,103, 0.7), -1.8em -1.8em 0 0em #344d67;
    }
    }
    @keyframes load5 {
    0%,
    100% {
        box-shadow: 0em -2.6em 0em 0em #344d67, 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.5), -1.8em -1.8em 0 0em rgba(52,77,103, 0.7);
    }
    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.7), 1.8em -1.8em 0 0em #344d67, 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.5);
    }
    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.5), 1.8em -1.8em 0 0em rgba(52,77,103, 0.7), 2.5em 0em 0 0em #344d67, 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.5), 2.5em 0em 0 0em rgba(52,77,103, 0.7), 1.75em 1.75em 0 0em #344d67, 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.5), 1.75em 1.75em 0 0em rgba(52,77,103, 0.7), 0em 2.5em 0 0em #344d67, -1.8em 1.8em 0 0em rgba(52,77,103, 0.2), -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.5), 0em 2.5em 0 0em rgba(52,77,103, 0.7), -1.8em 1.8em 0 0em #344d67, -2.6em 0em 0 0em rgba(52,77,103, 0.2), -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.5), -1.8em 1.8em 0 0em rgba(52,77,103, 0.7), -2.6em 0em 0 0em #344d67, -1.8em -1.8em 0 0em rgba(52,77,103, 0.2);
    }
    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(52,77,103, 0.2), 1.8em -1.8em 0 0em rgba(52,77,103, 0.2), 2.5em 0em 0 0em rgba(52,77,103, 0.2), 1.75em 1.75em 0 0em rgba(52,77,103, 0.2), 0em 2.5em 0 0em rgba(52,77,103, 0.2), -1.8em 1.8em 0 0em rgba(52,77,103, 0.5), -2.6em 0em 0 0em rgba(52,77,103, 0.7), -1.8em -1.8em 0 0em #344d67;
    }
    }










`;

export default GlobalStyle;
