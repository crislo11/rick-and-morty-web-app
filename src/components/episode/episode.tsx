import Head from "next/head";
import Link from "next/link";
import { EpisodeProps, CharacterType } from "../../types";

const Character: React.FC<EpisodeProps> = ( { episode }: EpisodeProps ) => {
    const { name, air_date, characters } = episode;
    const [ charactersDetail ] = characters;

    return (
        <div className="container">
            <Head>
                <title>{name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <h1 className="title">{name}</h1>
                <div className="profile">
                    <div className="profile-details">
                        <ul>
                            <li>
                                <strong>Name:</strong> {name}
                            </li>
                            <li>
                                <strong>Episode:</strong> {episode.episode}
                            </li>
                            <li>
                                <strong>Air Date:</strong> {air_date}
                            </li>
                            {/* {charactersDetail?.characters.results.map((character: CharacterType) => (
                                <li key={character.id}> {character.name} </li>
                            ))} */}
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