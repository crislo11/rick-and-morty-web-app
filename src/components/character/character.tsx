import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { CharacterProps } from "../../types";

const Character: React.FC<CharacterProps> = ( { character }: CharacterProps ) => {
    const { image, name, location, status, species, gender, origin, episode } = character;
    const [ episodeDetail ] = episode;

    return (
        <div className="bg-black">
            <Head>
                <title>{name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-wrap detail">
                <h1>{name}</h1>
                <div className="flex flex-wrap justify-evenly profile">
                    <div>
                        <Image className="object-contain" width={'200px'} height={'200px'} src={image} alt={`${name} Thumbail`} />
                    </div>
                    <div>
                        <h2 className="text-green-400">Character Details</h2>
                        <ul>
                            <li>
                                <strong className="text-green-400">Name:</strong> {name}
                            </li>
                            <li>
                                <strong className="text-green-400">Location:</strong> {location?.name}
                            </li>
                            <li>
                                <strong className="text-green-400">Location:</strong> {origin?.name}
                            </li>
                            <li>
                                <strong className="text-green-400">Status:</strong> {status}
                            </li>
                            <li>
                                <strong className="text-green-400">Gender:</strong> {gender}
                            </li>
                            <li>
                                <strong className="text-green-400">Species:</strong> {species}
                            </li>
                            <li>
                                <strong className="text-green-400">Episode:</strong> {episodeDetail.name}
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap actions">
                    <Link href={`/episode/${episodeDetail.id}`}>
                        <button>Episode Details</button>
                    </Link>
                    <Link href="/">
                        <button>Back to Home</button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Character