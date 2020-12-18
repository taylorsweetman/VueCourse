<template>
  <div>
    <user-data @data-ready="setData"></user-data>
    <active-user :userName="userName" :age="age"></active-user>
  </div>
</template>

<script>
import UserData from "./components/UserData.vue";
import ActiveUser from "./components/ActiveUser.vue";
export default {
  data() {
    return {
      userName: "",
      age: "",
    };
  },
  components: {
    UserData,
    ActiveUser,
  },
  methods: {
    setData(userName, age) {
      this.userName = userName;
      this.age = age;
    },
  },
};
</script>