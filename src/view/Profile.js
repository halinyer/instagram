import {useEffect} from 'react';
import { Outlet, useParams } from 'react-router';
import {NavLink}  from '../components/Navbard-element';
import styled from 'styled-components'
import Avatar from '../components/Avatar'
import { Main } from '../components/Main-element';
import { useSelector , useDispatch} from 'react-redux';
import { getProfileAction } from '../actions/profileAction';


const Profile = () => {
  let dispatch = useDispatch()
  let {profile} = useParams()
  let {name,image} = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(getProfileAction())
  }, []);
  return (
    <Main>
      <ProfileHeader>
           <ProfileImg>
              <Avatar image={image} width='9.4rem'/>
           </ProfileImg>

           <ProfileInfo>
              <div className='info-1'>
                <p>{name}</p>
                <button>Editar perfil</button>
              </div>
              <ul className='info-2'>
                 <li><span>1</span> publicacion</li>
                 <li><span>100</span> seguidores</li>
                 <li><span>100</span> Seguidos</li>
              </ul>
              <div className='info-3'>
                 <h4>halinyer</h4>
              </div>
              
           </ProfileInfo>
      </ProfileHeader>

      <ProfileBody>
        <ProfileNav>
          <ProfileNavOption><NavLink to="/profile">Publicaciones</NavLink></ProfileNavOption>
          <ProfileNavOption><NavLink to="save">Guardado</NavLink></ProfileNavOption>
          <ProfileNavOption><NavLink to="tagged">Etiquetado</NavLink></ProfileNavOption>
        </ProfileNav>
      </ProfileBody>
      <Outlet />
    </Main>
  )
};

export default Profile;


// const Main = styled.main`
// box-sizing:border-box;
//  width: 100%;
//  max-width: 950px;
//  margin: auto ;
//  padding: 0px 10px;
 
 
// `


const ProfileHeader = styled.section`
 padding: 26px 0  px;
 box-sizing:border-box;
 width: 100%;
 max-width: 830px;
 margin: auto;
 display: grid;
 grid-template-columns: 35% 1fr;

 .info-1{
   display: flex;
   

   p{
     font-size: 25px;
     cursor: pointer;
   }
 }
 
 .info-2 {
   display: flex;
    list-style: none;
    padding: 0;

    li{
      padding: 0;
    }

   
 }


`
const ProfileImg = styled.div`
 margin: auto;
`

const ProfileInfo = styled.div`

`


const ProfileBody = styled.div`
 border-top: 1px solid black;
 box-sizing:border-box;
`

const ProfileNav = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 width: 500px;
 margin: auto;

`

const ProfileNavOption = styled.p`
  text-align: center;
  cursor: pointer;
`
