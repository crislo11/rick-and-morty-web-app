import client from '../apolloClient';
import { GET_ALL_CHARACTERS } from '../queries';
import Characters from '../components/characters/characters';
import { CharactersType } from '../types';

const Home = (characters: CharactersType) => {
  return <Characters {...characters} />
}

export const getStaticProps = async () => {
  const { data } = await client.query({ query: GET_ALL_CHARACTERS })

  return {
    props: {
      characters: data?.characters
    }
  }
}

export default Home