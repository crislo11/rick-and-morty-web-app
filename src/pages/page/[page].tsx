import client from '../../apolloClient';
import { GET_ALL_CHARACTERS, GET_PAGE_INFO } from '../../queries';
import Characters from '../../components/characters/characters';
import { CharactersType } from '../../types';

const Page = (characters: CharactersType) => {
  return <Characters {...characters} />
};

export const getStaticPaths = async () => {
  const { data } = await client.query({ query: GET_PAGE_INFO })

  const numberOfPages = data?.characters.info.pages + 1;

  const arrayOfPages = [...Array.from((numberOfPages).keys())]
  // const arrayOfPages = [...Array(numberOfPages).keys()]

  const paths = arrayOfPages.map(page => ({
    params: { page: `${page}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { page } }: any) => {
  const { data } = await client.query({
    query: GET_ALL_CHARACTERS,
    variables: { page: Number(page) }
  })

  return {
    props: {
      characters: data?.characters
    }
  }
}

export default Page

