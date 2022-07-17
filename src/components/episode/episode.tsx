import Head from "next/head";
import Link from "next/link";
import { EpisodeProps, CharacterType } from "../../types";

const Character: React.FC<EpisodeProps> = ( { episode }: EpisodeProps ) => {
    const { name, air_date, characters } = episode;
    const [ charactersDetail ] = characters;

    return (
        <div className="bg-black">
            <Head>
                <title>{name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-wrap detail">
                <h1>{name}</h1>
                <div className="profile">
                    <div>
                        <h2 className="text-green-400">Character Details</h2>
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
                <div className="flex flex-wrap actions">
                    <Link href="/">
                        <button>Back to Home</button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Character