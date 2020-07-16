import { LOGIN_START } from "./actionTypes";

import { APIUrls} from '../helpers/urls';
import {getFromBody} from '../helpers/utils'

export function startLogin(){

    return {
        type:LOGIN_START
    }
}

export function lonin(email,password)
{

    return (dispathch) => {
        const url =  APIUrls.lonin();

        fetch(url,{
            method:'POST',
            headers:{

                'Content-Type':'application/x/www-form-urlencoded',
            },
            body:getFromBody({email,password}),
        })
        


    }
}
