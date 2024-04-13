import Image from "next/image"
import styles from './comment.module.css'

export const Comment = ({ comment }) => {

    const imgSrc = comment.author.avatar ?? comment.author.image

    return (<div className={styles.comment}>
        {imgSrc && <Image 
            src={imgSrc} 
            width={32} height={32} 
            alt={`Avatar do(a) ${comment.author.name}`} 
        />}
        <strong>@{comment.author.name}</strong>
        <p>{comment.text}</p>
    </div>)
}