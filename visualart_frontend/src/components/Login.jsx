import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets visualart/Infinito Zoom - 25034.mp4';
import logo from '../assets visualart/visual arts logo@4x.png';
import jwt_decode from 'jwt-decode';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


import { client } from '../client';

const Login = () => {
  const navigate = useNavigate();

  const credentialResponse=(response)=>{
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    var decodedHeader = jwt_decode(response.credential);
    console.log(decodedHeader);

    const { name, sub, picture } = decodedHeader;

    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    }

    client.createIfNotExists(doc)
      .then(() =>{
        navigate('/*', { replace: true });
      })

  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
              <div className='p-5'>
                <img src={logo} width="130px" alt="logo" />
              </div>
              <div className='shadow-2x1'>
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                  render={(renderProps) => (
                    <button
                      type='button'
                      className='bg-mainColor flex jusitify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <FcGoogle className="mr-4" /> Inicia Sesion con Google

                    </button>
                  )} 
                  onSuccess={credentialResponse}
                  onError={credentialResponse}
                  cookiePolicy="single_host_origin"
                />

              </div>
        </div>

      </div>
      Login
      
    </div>
  )
}

export default Login