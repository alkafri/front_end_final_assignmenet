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
