import { useLazyQuery } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SEARCH_CHARACTER } from "../../queries";
import { CharactersType, CharacterType } from "../../types";
import Card from "../card/card";

const Characters = (characters: CharactersType) => {
    const router = useRouter();
    const page = Number(router.query.page) || 1;
    const [search, setSearch] = useState("");
    const [resultSearch, setResultSearch] = useState<CharacterType[]>(characters?.characters?.results);
    const [searchCharacter] = useLazyQuery(SEARCH_CHARACTER, {
        variables: {
            query: search,
        },
    });

    useEffect(() => {
        if (search) {
            searchCharacter().then(data => {
                setResultSearch(data.data.characters.results);
            });
        }
    }, [search]);

    return (
        <div className="bg-black">
            <Head>
                <title>Morty and Morty</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div className="flex justify-center">
                    <Link href="/">
                        <Image
                            className="m-ato"
                            alt="logo"
                            src="/logo.png"
                            width={"380"}
                            height={"200"}
                        />
                    </Link>
                </div>
            </header>

            <main>
                <form className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Search Character..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <div className="list flex flex-wrap flex-col">
                    {resultSearch.map((character: CharacterType) => (
                        <Card {...character} key={character.id} />
                    ))}
                </div>

                <div className="flex justify-center flex-wrap pagination">
                    {page > 1 && (
                        <Link href={`/page/${page - 1}`} passHref>
                            <button>Previous Page</button>
                        </Link>
                    )}

                    <Link href={`/page/${page + 1}`} passHref>
                        <button>Next Page</button>
                    </Link>
                </div>
            </main>

            <footer className="flex justify-center">
                <div>
                    <span>
                        by <a href="https://github.com/crislo11">Cristian López</a>{" "}
                    </span>
                    <span>2022</span>
                </div>
            </footer>
        </div>
    );
};

export default Characters;
