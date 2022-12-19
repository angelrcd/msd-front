import React, { useState, useEffect, useRef } from 'react'
import { useGetUserData } from '../modules/useGetUserData'
import UploadPicButton from './UploadPicButton'
import { Oval } from 'react-loader-spinner'
import { changeDBUserProfilePic } from '../modules/fetchUserProfilePicture'
import { logout } from '../modules/logout'

function UserInfo () {
  const { userData, isLoading, error } = useGetUserData()
  const [image, setImage] = useState(false)
  const fileInput = useRef()
  const selectFile = () => {
    fileInput.current.click()
  }

  const onImageChange = (event) => {
    console.log(userData.profilePic)
    if (event.target.files && event.target.files[0]) {
      changeDBUserProfilePic(userData._id)
      setTimeout(setImage(!image), 2000)
      console.log(URL.createObjectURL(event.target.files[0]))
      console.log(image)
    }
  }

  const profileUserInfo = (
    <div className='w-full h-[300px] flex flex-col justify-center items-center p-2'>
      <img title="Foto de perfil de usuario" src={'https://img.mysweetdreams.es/img/pfp/' + userData.profilePic} alt="user profile picture" className='rounded-full h-[220px] w-[220px] border-2 border-black object-cover' />
      <input className='hidden' type="file" ref={fileInput} onChange={onImageChange} />
      <span onClick={selectFile}>
        <UploadPicButton />
      </span>
    </div>
  )

  const profileUserLoading = (
    <div className='w-full h-[300px] flex flex-col justify-center items-center p-2'>
      <Oval
        height={220}
        width={220}
        color="#60a5fa"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="60a5fa"
        strokeWidth={2}
        strokeWidthSecondary={2}

      />
    </div>
  )

  return (
    <section className='w-full h-1/2 bg-web-fondo dark:bg-web-formBgDarkMode'>
      {isLoading ? profileUserLoading : profileUserInfo}
      <div className='relative w-full h-fit p-2 flex flex-col justify-center items-center gap-2'>
        <section className='text-xl'>
          <h3 title='Nombre de usuario'>{userData.name} {userData.lastName}</h3>
        </section>
        <section className=''>
          <h3 title='Edad'>{userData.birthdate}</h3>
        </section>
      </div>
    </section>
  )
}

export default UserInfo
