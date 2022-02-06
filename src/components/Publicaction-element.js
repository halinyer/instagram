import styled from "styled-components";


export const Card = styled.div`
border: 1px solid #fafafa;
width: 100%;
grid-column: 1 / 4;
border: 1px solid rgba(var(--b6a,219,219,219),1);
margin-top: 25px;
border-radius: 5px;
`


export const CardHeader = styled.div`
  padding: 6px 15px;
  display: flex;
  justify-content: space-between;
  div{
    display: flex;
    align-items: center;
     
  }
`


export const CardName = styled.p `
 margin-left: 10px;

`


export const CardBody = styled.div`

img{
    width: 100%;
}

`

export const CardFooter = styled.div`
padding: 15px 15px;
display: flex;
justify-content: space-between;
div{
    display: flex;
    div{
        margin-right: 10px;
    }

}

`