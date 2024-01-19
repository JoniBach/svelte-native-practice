<script lang="ts">
  let message: string = "Blank Svelte Native App";
</script>

<page>
  <actionBar title="Home" />
  <gridLayout>
    <label class="info">
      <span>test</span>
    </label>
  </gridLayout>
</page>

<style>
  .info .fas {
    color: #3a53ff;
  }

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
