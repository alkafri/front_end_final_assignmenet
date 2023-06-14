<template>
    <div>
        <header-section />
        <br><br>
        <lst-book-guest />
        </div>
    </template>
    
    <script>
    import HeaderSection from '@/components/header.vue';
    import LstBookGuest from '@/components/lstBookUser.vue';
    
    export default {
        components: {
        HeaderSection,
        LstBookGuest
        }
    };
</script>

<style>
  /* Your custom styles for the BookList view */
</style>