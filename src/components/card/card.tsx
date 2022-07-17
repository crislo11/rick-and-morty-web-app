import Image from 'next/image';
import Link from 'next/link'; 
import { CharacterType } from '../../types';

const Card = (character: CharacterType) => {
    const { id, name, image} = character;

    return (
        <div className="card">
            <Link href={`/character/[characterid]`} as={`/character/${id}`}>
                <a>
                    <Image
                        src={image}
                        width={300} height={300}
                        className="image"
                        alt={`${name} Thumbnail`}
                    />
                    <div className="description">
                        <p className="name">{name}</p>
                    </div>  
                </a>
            </Link >
        </div >
    )
}

export default Card
