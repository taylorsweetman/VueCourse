<template>
  <li>
    <h2>{{ name }} {{ friendIsFav === "1" ? "(Favorite)" : "" }}</h2>
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
  /* props: ["name", "phoneNumber", "emailAddress", "isFavorite"], */
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: String,
      required: false,
      default: '0',
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: this.name,
        phone: this.phoneNumber,
        email: this.emailAddress,
      },
      friendIsFav: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      if (this.friendIsFav === "1") {
        this.friendIsFav = "0";
      } else {
        this.friendIsFav = "1";
      }
    },
  },
};
</script>