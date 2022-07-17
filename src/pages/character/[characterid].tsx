import React from 'react';
import client from "../../apolloClient";
import { GET_CHARACTER } from "../../queries";
import Character from "../../components/character/character";
import { CharacterProps, CharacterIdProps } from '../../types';

const CharacterId = (character: CharacterProps) => {
    return <Character {...character} />
}

export const getServerSideProps= async ({ query }: CharacterIdProps) => {
    const { characterid } = query;

    const { data } = await client.query({
        query: GET_CHARACTER,
        variables: {
            characterid: characterid
        }
    });

    return {
        props: {
            character: data.character
        }
    }
}

export default CharacterId


