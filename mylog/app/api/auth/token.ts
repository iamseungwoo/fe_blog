"use client"

import { cookies } from 'next/headers'

const cookie = cookies();

export const setRefreshToken = (refreshToken: string) => {
    // const today = new Date();
    // const expireDate = today.setDate(today.getDate() + 7);

    // return cookies.set('refresh_token', refreshToken, { 
    //     sameSite: 'strict', 
    //     path: "/", 
    //     expires: new Date(expireDate)
    // });
    cookie.set('refreshToken', refreshToken)
};

export const getRefreshCookieToken = () => {
    return cookie.get('refreshToken');
};

export const setAccessToken = (accessToken: string) => {
    cookie.set('accessToken', accessToken);
};

export const getAccessToken = () => {
    return cookie.get('accessToken');
}