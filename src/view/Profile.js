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
    dispatch(getProfileAction(profile))
  }, [profile]);

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



const ProfileHeader = styled.section`
 padding: 18px 0px;
 box-sizing:border-box;
 width: 100%;
 max-width: 800px;
 margin: auto;
 display: grid;
 grid-template-columns: 28% 45%;
 gap: 50px;





`
const ProfileImg = styled.div`
 margin: auto;

`

const ProfileInfo = styled.div`
display: flex;
flex-direction: column;

.info-1{
   display: flex;
   align-items: center;
 
   

   p{
     font-size: 25px;
     cursor: pointer;
   }

   button{
     width: 90px;
     height: 30px;
     background: white;
     border: 1.6px solid rgba(var(--b6a,219,219,219),1);
     border-radius: 4px;
     cursor:  pointer;
     font-weight: bold;
     margin-left: 20px;
   }
 }
 
 .info-2 {
   display: flex;
    list-style: none;
    padding: 0;
    justify-content: space-between;
    span{
      font-weight:bold;
    }
    li{
      padding: 0;
    }

   
 }


`


const ProfileBody = styled.div`
 border-top: 1px solid rgba(var(--b6a,219,219,219),1);
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
