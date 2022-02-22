<template>
  <div class="min-h-screen">
    <div class="flex flex-col items-center py-8">
      <img src="/img/buy-reward-success.png" class="w-4/5" alt="" />
      <h1 class="my-4 text-2xl font-bold">Your transaction has been sent</h1>
      <p class="w-4/5 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        tenetur aspernatur adipisci. Quas aperiam id officiis totam earum
        quibusdam necessitatibus porro exercitationem aut provident! Voluptate
        saepe nulla ut enim illo?
      </p>
    </div>

    <SimpleBottomBar :title="'Back to Wallet'" @buttonClick="onClickButton" />
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
