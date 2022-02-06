import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardName } from './Publicaction-element';
import {BiDotsHorizontalRounded, BiPaperPlane, BiMessageRounded, BiSave,BiHeart} from "react-icons/bi";
import post from '../assets/post.jpg'
import Avatar from './Avatar';
import { IconContext } from 'react-icons/lib';
import {useNavigate} from 'react-router-dom'

const Publication = ({name,image}) => {
  let navigate = useNavigate()

  return (
      <Card>
          <IconContext.Provider value={{ size: "1.5rem" , cursor:"pointer"}}>
              <CardHeader>
                  <div >
                      <Avatar image={image} width="2.3rem" />
                      <CardName onClick={() => navigate(`/${name}`)}>{name}</CardName>
                  </div>
                  <div>
                      <BiDotsHorizontalRounded />
                  </div>
              </CardHeader>
              <CardBody>
                  <img src={image} />
              </CardBody>
              <CardFooter>
                  <div>
                      <div><BiHeart /></div>
                      <div><BiMessageRounded /></div>
                      <div><BiPaperPlane /></div>
                  </div>
                  <div>
                      <div><BiSave /></div>
                  </div>
              </CardFooter>
          </IconContext.Provider>

      </Card>
  )
};

export default Publication;
