import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { CharacterProps } from "../../types";

const Character: React.FC<CharacterProps> = ( { character }: CharacterProps ) => {
    const { image, name, location, status, species, gender, origin, episode } = character;
    const [ episodeDetail ] = episode;

    return (
        <div className="container">
            <Head>
                <title>{name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="title">{name}</h1>
                <div className="profile">
                    <div className="profile-image">
                        <Image src={image} width={'300px'} height={'300px'} alt={`${name} Thumbail`} />

                    </div>
                    <div className="profile-details">
                        <h2>Character Details</h2>
                        <ul>
                            <li>
                                <strong>Name:</strong> {name}
                            </li>
                            <li>
                                <strong>Location:</strong> {location?.name}
                            </li>
                            <li>
                                <strong>Location:</strong> {origin?.name}
                            </li>
                            <li>
                                <strong>Status:</strong> {status}
                            </li>
                            <li>
                                <strong>Gender:</strong> {gender}
                            </li>
                            <li>
                                <strong>Species:</strong> {species}
                            </li>
                            <Link href={`/episode/${episodeDetail.id}`}>
                                <a>
                                    <strong>Episode:</strong> {episodeDetail.name}
                                </a>
                            </Link>
                        </ul>
                    </div>
                </div>
                <p className="back">
                    <Link href="/">
                        <a>Back to All Characters</a>
                    </Link>
                </p>
            </main>
        </div>
    )
}

export default Character