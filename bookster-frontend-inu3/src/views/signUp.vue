<template>
    <div class="main-div">
        <header-section />
        <br><br>
        <usr-registration class="user-registration"/>
    </div>
</template>
    
    <script>
    import HeaderSection from '@/components/header.vue';
    import UsrRegistration from '@/components/usrRegistration.vue';
    
    export default {
    components: {
        HeaderSection,
        UsrRegistration
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