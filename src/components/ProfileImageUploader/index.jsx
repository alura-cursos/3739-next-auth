'use client'

import Image from "next/image"
import { Button } from "../Button"
import { useState } from "react"

import avatarDefault from './empty-avatar.png'

export const ProfileImageUploader = ({ user }) => {
    
    const [imgSrc, setImgSrc] = useState(user.avatar ?? user.image ?? avatarDefault)

    if (!user) {
        return null
    }
    return (<>
        <ul>
            <li>{user.name}</li>
            <li>
                <Image 
                    src={imgSrc}
                    width={254}
                    height={254}
                />
            </li>
        </ul>
        <form>

            <input type="file" />

            <Button>
                Upload
            </Button>

        </form>
    </>)
}