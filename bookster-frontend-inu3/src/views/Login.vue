/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file is to show the login page.
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
