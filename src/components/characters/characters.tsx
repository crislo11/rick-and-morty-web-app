import Head from "next/head";
import Card from "../card/card";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { CharactersType, CharacterType } from "../../types";

const Characters = (characters: CharactersType) => {
    const router = useRouter();
    const page = Number(router.query.page) || 1;

    return (
        <div className="bg-black">
            <Head>
                <title>Morty and Morty</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div className="flex justify-center">
                    <Link href="/">
                        <Image className="m-ato" alt='logo' src='/logo.png' width={'280'} height={'100'} />
                    </Link>
                </div>
            </header>

            <main>
                <div className="list flex flex-wrap flex-col">
                    {characters?.characters.results.map((character: CharacterType) => (
                        <Card {...character} key={character.id} />
                    ))}
                </div>

                <div>
                    {page > 1 && (
                        <Link href={`/${page - 1}`} passHref>
                            <button>Previous Page</button>
                        </Link>
                    )}

                    <Link href={`/${page + 1}`} passHref>
                        <button>Next Page</button>
                    </Link>
                </div>
            </main>

            <footer className="flex justify-center">
                <div>
                    <span>by <a href="https://github.com/crislo11">Cristian López</a> </span>
                    <span>2022</span>
                </div>
            </footer>
        </div>
    );
};

export default Characters;