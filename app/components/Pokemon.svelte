<script lang="ts">
  import { navigate } from "svelte-native";
  import { Template } from "svelte-native/components";
  import { ItemEventData } from "@nativescript/core";
  import { afterUpdate, onMount } from "svelte";
  import Details from "./Details.svelte";
  import * as api from "../services/api";
  import { PokemonListItem } from "~/types/pokemon";

  let data: PokemonListItem[] = [];
  let textFieldValue = "";
  let timeout: NodeJS.Timeout;

  //   onMount(() => {
  //     api.catchemAll().then((items) => (data = items));
  //   });

  function handleTap(event: ItemEventData) {
    navigate({
      page: Details,
      props: { index: event.index, item: data[event.index] },
    });
  }

  afterUpdate(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (textFieldValue.length > 0) {
        data = data.filter((item) => {
          api.catchemAll(textFieldValue).then((items) => (data = items));
          return item.name.toLowerCase().includes(textFieldValue.toLowerCase());
        });
      } else {
        api.catchemAll().then((items) => (data = items));
      }
      console.log(textFieldValue);
    }, 500);
  });
</script>

<page>
  <actionBar title="Pokemon List" />

  <stackLayout height="100%">
    <textField
      bind:text={textFieldValue}
      hint="Filter list of pokemon..."
      editable="true"
    />
    <listView height="100%" items={data} on:itemTap={handleTap}>
      <Template let:item>
        <gridLayout rows="*" columns="auto, *" margin="5 10" padding="0">
          <image row="0" col="0" src={item.image} class="thumb" />
          <label row="0" col="1" text={item.name} />
        </gridLayout>
      </Template>
    </listView>
  </stackLayout>
</page>
