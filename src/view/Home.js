import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Main } from '../components/Main-element';
import {getPostAsync} from '../actions/postAction'
import Publication from '../components/Publication';
import { getProfileAction } from '../actions/profileAction';

const Home = () => {
  const dispatch = useDispatch()
  const {results} = useSelector(state => state.post)

  useEffect(() => {
      dispatch(getPostAsync())
      
  }, []);

  return (

    <Main>
      <Container>
        <Nav>NAV</Nav>
        {
          results.map((e) => (
            <Publication key={e.id} name={e.name} image={e.image}/>
          ))
        }
                
      </Container>
    </Main>
  )
};

export default Home;


const Container = styled.div`
 margin-top: 25px;
 display: grid;
 grid-template-columns: repeat(5,1fr);
 width: 100%;


`


const Nav = styled.nav`
 border: 1px solid rgba(var(--b6a,219,219,219),1);
 grid-column: 1 /4;
width: 100%;
 height: 70px;
 border-radius: 3px;

` 

const Aside = styled.aside`
border: 1px solid black;
height: 100vh;
width: 30%;
border: 1px solid rgba(var(--b6a,219,219,219),1);
grid-column: 5/6;

` 
