import { ApolloProvider } from "@apollo/client";
import client from "../../apolloClient";
import Characters from "../../components/characters/characters";
import { GET_ALL_CHARACTERS } from "../../queries";
import { CharactersType, PageIdProps } from "../../types";

const Page = (characters: CharactersType) => {
  return (
    <ApolloProvider client={client}>
      <Characters {...characters} />
    </ApolloProvider>
  );
};

export const getServerSideProps = async ({ query }: PageIdProps) => {
  const { page } = query;
  const { data } = await client.query({
    query: GET_ALL_CHARACTERS,
    variables: { page: Number(page) },
  });

  return {
    props: {
      characters: data?.characters,
    },
  };
};

export default Page;