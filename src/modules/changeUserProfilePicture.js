import { API } from '../../data'

export function changeDBUserProfilePic (userId) {
  const options = {
    credentials: 'include',
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ profilePic: userId })
  }

  fetch(API.USERS.MY_USER, options)
}

export function uploadPicToServer (picture, userId) {
  const options = {
    mode: 'cors',
    credentials: 'include',
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: picture
  }
  console.log(API.USERS.PROFILE_PIC)
  fetch(API.USERS.PROFILE_PIC, options)
}
