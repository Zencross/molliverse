<template>
  <Vue2InteractDraggable
  @draggedLeft="draggedLeft"
  :interact-event-bus-events="interactEventBusEvents"
  v-if="isShowing"
  class="card isCurrent"
>
  <div>
    <h3 class="cardTitle">Drag me!</h3>
  </div>
</Vue2InteractDraggable>


<!-- <BaseButton @click="dragLeft" label="⇦" /> -->
</template>

<script>
import { Vue2InteractDraggable, InteractEventBus } from 'vue2-interact'

const INTERACT_DRAGGED_LEFT = 'INTERACT_DRAGGED_LEFT';

export default {
  data() {
    return {
      isShowing: true,
      interactEventBusEvents: {
        draggedLeft: INTERACT_DRAGGED_LEFT,
      },
    };
  },
  components: {
    Vue2InteractDraggable, InteractEventBus
  },
  methods: {
    dragLeft() {
      InteractEventBus.$emit(INTERACT_DRAGGED_LEFT);
    },
  }
};
</script>