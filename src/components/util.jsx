import {API_BASE_URL} from './constants'
export function validateEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


export function validatePass(pass)
{
    return (/[a-z]/.test(pass) && /[A-Z]/.test(pass) && /[0-9]/.test(pass) && pass.length>7);
}

export function saveCredentials(userID,email,token,image,rememberMe)
{
    if(rememberMe)
    {
        localStorage.setItem("user-email",email)
        if (image)   
            localStorage.setItem("profileAvatar",API_BASE_URL.substring(0, API_BASE_URL.length -1) + image)
        localStorage.setItem("user-id",userID)
        localStorage.setItem("user-token",token)
        localStorage.setItem("user-remember-me",rememberMe)
        sessionStorage.removeItem("user-email")
        sessionStorage.removeItem("profileAvatar")
        sessionStorage.removeItem("user-id")
        sessionStorage.removeItem("user-token")
        sessionStorage.removeItem("user-remember-me")
    }
    else
    {
        sessionStorage.setItem("user-email",email)
        if (image)
            sessionStorage.setItem("profileAvatar",API_BASE_URL.substring(0, API_BASE_URL.length -1) + image)
        sessionStorage.setItem("user-id",userID)
        sessionStorage.setItem("user-token",token)
        sessionStorage.setItem("user-remember-me",rememberMe)
        localStorage.removeItem("user-email")
        localStorage.removeItem("profileAvatar")
        localStorage.removeItem("user-id")
        localStorage.removeItem("user-token")
        localStorage.removeItem("user-remember-me")
    }
}

export function clearCredentials()
{
        sessionStorage.removeItem("user-token")
        sessionStorage.removeItem("user-id")
        sessionStorage.removeItem("user-email")
        sessionStorage.removeItem("profileAvatar")
        sessionStorage.removeItem("user-remember-me")
        localStorage.removeItem("user-email")
        localStorage.removeItem("user-token")
        localStorage.removeItem("user-id")
        localStorage.removeItem("profileAvatar")
        localStorage.removeItem("user-remember-me")
}

export function getItem(item)
{
    return (localStorage.getItem(item) || sessionStorage.getItem(item))
}

export function showMemoryVariables()
{
    console.log(getItem("user-email"))
    console.log(getItem("profileAvatar"))
    console.log(getItem("user-token"))
    console.log(getItem("user-id"))
    console.log(getItem("user-remember-me"))
}

export function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


