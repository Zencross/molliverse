<template>
  <div class="min-h-screen">
    <div class="flex flex-col items-center py-8">
      <img src="/img/buy-reward-success.png" class="w-4/5" alt="" />
      <h1 class="my-4 text-2xl font-bold">Purchase complete!</h1>
      <p class="w-4/5 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        tenetur aspernatur adipisci. Quas aperiam id officiis totam earum
        quibusdam necessitatibus porro exercitationem aut provident! Voluptate
        saepe nulla ut enim illo?
      </p>
    </div>
    <div
      id="sticky-buy-bar"
      class="fixed inset-x-0 bottom-0 flex justify-center w-full py-4 "
    >
      <button
        class="w-10/12 py-4 text-white bg-black rounded-md"
        @click="onClickButton"
      >
        Start swiping!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickButton() {
      this.$router.push("/user-profile");
    }
  }
};
</script>

<style></style>
