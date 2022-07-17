import React from 'react';
import client from "../../apolloClient";
import { GET_EPISODE } from "../../queries";
import Episode from "../../components/episode/episode";
import { EpisodeIdProps, EpisodeProps } from '../../types';

const EpisodeId = (episode: EpisodeProps) => {
    return <Episode {...episode} />
}

export const getServerSideProps = async ({ query } : EpisodeIdProps) => {
    const { episodeid } = query;

    const { data } = await client.query({
        query: GET_EPISODE,
        variables: {
            episodeid: episodeid
        }
    });

    return {
        props: {
            episode: data.episode
        }
    }
}

export default EpisodeId