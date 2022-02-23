<template>
  <div class="min-h-screen">
    <div class="flex flex-col items-center py-8">
      <img src="/img/receive-successful-512w.png" class="w-4/5" alt="" />
      <h1 class="my-4 text-2xl font-bold text-center">
        You have successfully received funds!
      </h1>
      <p class="w-4/5 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        tenetur aspernatur adipisci. Quas aperiam id officiis totam earum
        quibusdam necessitatibus porro exercitationem aut provident! Voluptate
        saepe nulla ut enim illo?
      </p>
    </div>

    <SimpleBottomBar :title="'Go to Wallet'" @buttonClick="onClickButton" />
  </div>
</template>

<script>
import SimpleBottomBar from "~/components/SimpleBottomBar.vue";
export default {
  components: { SimpleBottomBar },
  methods: {
    onClickButton() {
      this.$router.push("/wallet");
    }
  }
};
</script>

<style></style>
