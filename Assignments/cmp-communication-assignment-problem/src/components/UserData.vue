
<template>
  <div>
    <label>Name</label><br />
    <input type="text" v-model="name" @input="sendData()" /><br />
    <label>Age</label><br />
    <input type="number" v-model="age" @input="sendData()" /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  emits: ["data-ready"],
  methods: {
    sendData() {
      if (this.name !== "" && this.age !== "") {
        this.$emit("data-ready", this.name, this.age);
      }
    },
  },
};
</script>