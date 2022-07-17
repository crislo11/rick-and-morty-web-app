import Head from "next/head";
import Card from "../card/card";
import Link from "next/link";
import { useRouter } from "next/router";
import { CharactersType, CharacterType } from "../../types";

const Characters = (characters: CharactersType) => {
    const router = useRouter();
    const page = Number(router.query.page) || 1;

    return (
        <div>
            <Head>
                <title>Morty and Morty</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="title">
                    <span>Rick and Morty Character App</span>
                </div>
                <div className="row">
                    {characters?.characters.results.map((character: CharacterType) => (
                        <Card {...character} key={character.id} />
                    ))}
                </div>
            </main>

            <footer>
                {page > 1 && (
                    <Link href={`/${page - 1}`} passHref>
                        <button>Previous Page</button>
                    </Link>
                )}

                <Link href={`/${page + 1}`} passHref>
                    <button>Next Page</button>
                </Link>
            </footer>
        </div>
    );
};

export default Characters;
