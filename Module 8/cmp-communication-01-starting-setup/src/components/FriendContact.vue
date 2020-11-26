<template>
  <li>
    <h2>{{ name }} {{ isFavorite === "1" ? "(fav)" : "" }}</h2>
    <button @click="toggleFav">Toggle Fav</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: this.name,
        phone: this.phoneNumber,
        email: this.emailAddress,
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      if (this.isFavorite === "1") {
        this.isFavorite = "0";
      } else {
        this.isFavorite = "1";
      }
    },
  },
};
</script>