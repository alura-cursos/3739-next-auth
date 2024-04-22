'use client';

import Image from "next/image"
import { IconButton } from "../IconButton"
import { signIn } from 'next-auth/react'
import githubImg from './github.png'

export const Github = (props) => {

    function loginAttempt() {
        console.log('tentar fazer login via github');
        signIn('github', {
            callbackUrl: '/'
        })
    }

    return (<IconButton {...props} onClick={loginAttempt}>
        <Image src={githubImg} alt="Github Logo" />
    </IconButton>)
}