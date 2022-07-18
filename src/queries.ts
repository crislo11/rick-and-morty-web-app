import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
    query GetAllCharacter($page: Int) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
            }
        }
    }
`

const GET_PAGE_INFO = gql`
    query Character {
        characters {
            info {
                pages
            }
        }
    }
`

const GET_CHARACTER = gql`
    query GetCharacter($characterid: ID!) {
        character(id: $characterid) {
            image
            name
            status
            species
            gender
            location {
                name
            }
            origin {
                name
            }
            episode {
                id
                name
            }
        }
    }
`
const GET_EPISODE = gql`
    query GetEpisode($episodeid: ID!) {
        episode(id: $episodeid) {
            name
            air_date
            created
            episode
            characters {
                name
            }
        }
    }
`

const SEARCH_CHARACTER = gql` 
    query SearchCharacter($query: String!) {
        characters( filter:{name: $query} ) {
            info {
                count
                pages
            }
            results {
                id
                name
                image
                status
                location {
                    id
                    name
                }
                origin {
                    id
                    name
                }
                episode {
                    id
                    name
                }
            }
        }
    }
`

export { GET_ALL_CHARACTERS, GET_PAGE_INFO, GET_CHARACTER, GET_EPISODE, SEARCH_CHARACTER }
