import client from "../../apolloClient";
import { SEARCH_CHARACTER } from "../../queries";

const SearchCharacter = async (query: any, res: any) => {
    const { search } = query;

    try {
        const { data } = await client.query({
            query: SEARCH_CHARACTER,
            variables: {
                search: search
            }
        });
        res.status(200).json({
            characters: data.characters.results, 
            error: null
        });
    } catch (error: any) {
        if (error.message === "404: Not found") {
            res.status(400).json({
                characters: null, 
                error: "No Character found"
            });
        } else {
            res.status(400).json({
                characters: null, 
                error: "Internal Error, please try again"
            });
        }
    }
}

export default SearchCharacter