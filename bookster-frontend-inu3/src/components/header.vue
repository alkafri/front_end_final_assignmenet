/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This files include the app header, which is page title, logged user name and role, Sign out/sign in button. 
 */

<template>
    <header class="header">
        <div class="title">{{ websiteTitle }}</div>
        <div class="sign-out">
            <BtnSignOut />
        </div>
    </header>
</template>

<script>
    import BtnSignOut from '@/components/btnSignOut.vue';
    
    export default {
        name: 'Header',
        components: {
        BtnSignOut,
        },
        data() {
        return {
            websiteTitle: 'BOOKSTERS WEBSITE',
        };
        },
    };
</script>

<style>
.header {
    width: 100%;
    height: 100px;
    background-color: #d9d9d9;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 22px;
    color: #000000;
}

.title {
    font-weight: bold;
    align-content: center;
    margin: auto;
    padding-left: 125px;
}

.sign-out {
    cursor: pointer;
    margin-right: 25px;
}
</style>
