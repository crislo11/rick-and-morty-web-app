export type EpisodeType = {
    id: Number;
    name: String;
    episode: String;
    air_date: String;
    characters: Array<CharactersType>;
}

export type EpisodeProps = {
    episode: EpisodeType;
}

export type EpisodeIdProps = {
    query: {
        episodeid: string;
    }
}

export type CharactersType = {
    characters: {
        results: Array<CharacterType>;
    }
}

export type CharacterType = {
    id: Number | Key;
    name: String;
    status: String;
    species: String;
    type: String;
    gender: String;
    origin: LocationType;
    location: LocationType;
    image: string;
    episode: Array<EpisodeType>;
    created: String;
}

export type CharacterProps = {
    character: CharacterType;
}

export type CharacterIdProps = {
    query: {
        characterid: string;
    }
}

export type LocationType = {
    id: Number;
    name: String;
    type: String;
    dimension: String;
    residents: Array<CharactersType>;
    created: String;
}

export type PagesType = {
    count: Number;
    pages: Number;
    next: Number;
    prev: Number;
}