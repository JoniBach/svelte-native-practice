<script lang="ts">
  import { navigate } from "svelte-native";
  import { Template } from "svelte-native/components";
  import { ItemEventData } from "@nativescript/core";
  import { onMount } from "svelte";
  import Details from "./Details.svelte";
  import * as api from "../services/api";
  import { NavItem, PokemonListItem } from "~/types/pokemon";
  import Pokemon from "./Pokemon.svelte";

  let data: NavItem[] = [];

  onMount(() => {
    // api.catchemAll().then((items) => (data = items));
    data = [
      {
        name: "Pokemon List",
        description: "making requests to the pokeAPI",
      },
    ];
  });

  function handleTap(event: ItemEventData) {
    navigate({
      page: Pokemon,
    });
  }
</script>

<page>
  <actionBar title="Svelte Native Projcets" />
  <stackLayout height="100%">
    <listView height="100%" items={data} on:itemTap={handleTap}>
      <Template let:item>
        <gridLayout rows="*" columns="auto, *" margin="5 10" padding="0">
          <!-- <image row="0" col="0" src={item.image} class="thumb" /> -->
          <label row="0" col="0" text="{item.name}: " />
          <label row="0" col="1" text={item.description} />
        </gridLayout>
      </Template>
    </listView>
  </stackLayout>
</page>
