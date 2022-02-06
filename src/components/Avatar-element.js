import styled from "styled-components";



export const Border = styled.div`
  img{
      width:${(props) => props.width ? props.width  : "25px"} ;
      border-radius: 50%;
      cursor: pointer;
  }
`