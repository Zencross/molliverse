export function install(Vue) {
  Vue.mixin({
    data() {
      return {
        done: []
      };
    },
    //function to log every mutation that is committed
    created: function() {
      this.$store.subscribe(mutation => {
        if (mutation.type !== EMPTY_STATE) {
          this.done.push(mutation);
        }
      });
    },
    // undo() will reset the store to its initial state and
    //re-run mutation again, all but the last
    methods: {
      undo() {
        this.done.pop();
        this.$store.commit(EMPTY_STATE);
        this.done.forEach(mutation => {
          this.$store.commit(`${mutation.type}`, mutation.payload);
          this.done.pop();
        });
      }
    }
  });
}
