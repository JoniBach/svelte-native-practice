// services/api.ts
import { Http } from "@nativescript/core";
import { PokemonListApiResponse, PokemonListItem } from "~/types/pokemon";

export const catchemAll = (name = '', limit = 100, offest = 0) =>
    Http.getJSON<PokemonListApiResponse>(
        `https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0`
    ).then(
        (res) => {
            return res.results.map((pokemon) => {
                let splitUrl = pokemon.url.split("/");
                let id = splitUrl[splitUrl.length - 2];

                return {
                    ...pokemon,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                } as PokemonListItem;
            });
        }
    );

export const getDescription = (id: number) => Http.getJSON(`https://pokeapi.co/api/v2/characteristic/${id}`).then(
    (result: any) => {
        let desc = result.descriptions.find(
            (description: any) => description?.language?.name == "en"
        );
        return desc?.description
    },
);