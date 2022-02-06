import styled from "styled-components";


export const Search = styled.div`
 display: flex;
 align-items: center;
 max-width: 260px;
 height: 36px;
 padding: 0px 6px;
 border-radius: 6px;
 background: rgba(var(--bb2,239,239,239),1);
 box-sizing: border-box;
 padding: 0px 15px;
 box-sizing: border-box;

 @media only screen and (max-width: 710px) {
    display: none;
    
 }

 input{
     border: 0;
     outline: none;
     font-size: 15px;
     background: transparent;
 }

`