<template>
    <div>
        <header-section />
        <br><br>
        <lst-book-guest />
    </div>
</template>

<script>
    import HeaderSection from '@/components/header.vue';
    import LstBookGuest from '@/components/lstUserAdmin.vue';

    export default {
    components: {
        HeaderSection,
        LstBookGuest
    }
};
</script>
