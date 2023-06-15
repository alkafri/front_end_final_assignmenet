/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file is to show the login page. It gives the option either for: Login as User/Admin, Proceed to books list as a guest, or register new user.
 * This file uses the following components: header.vue, userLogin.vue
 */

<template>
  <div class="main-div">
    <header-section />
    <br><br>
    <usr-login class="user-login"/>
  </div>
</template>

<script>
import HeaderSection from '@/components/header.vue';
import UsrLogin from '@/components/usrLogin.vue';

export default {
  components: {
    HeaderSection,
    UsrLogin
  }
};
</script>

<style>
.main-div{
  width: 100%;
  min-height: 100%;
  margin: auto;
  align-content: center;
}
</style>
