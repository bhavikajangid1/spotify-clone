import { backend_url } from "../config";

export const makeUnauthenticatePOSTRequest = async (route,body) => {
    const response = fetch(backend_url + route ,
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(body)
    })
    const formattedRes = (await response).json();
    return formattedRes;
}

export const makeAuthenticatePOSTRequest  = async (route,body) => {
    const token = getToken();
    const response = fetch(backend_url + route ,
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${token}`,
        },
        body: JSON.stringify(body)
    })
    const formattedRes = (await response).json();
    return formattedRes;
}

export const makeAuthenticateGETRequest  = async (route) => {
    const token = getToken();
    const response = fetch(backend_url + route ,
    {
        method:"GET",
        headers:{
            "Content-Type":"application/json",
             "Authorization" : `Bearer ${token}`,
        },
    })
    const formattedRes = (await response).json();
    return formattedRes;
}


const getToken  = () =>{
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
    );
    return accessToken;
}