/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file is to show the [Admin] view of user list, also can change/delete the user settings, this page is only accessible for users with Admin role.
 * This file uses the following components: header.vue, subHeaderAdminUsers.vue, lstUserAdmin.vue
 */

<template>
    <div>
        <header-section />
        <br><br>
        <sub-header-users-section />
        <lst-book-guest />
    </div>
</template>

<script>
    import HeaderSection from '@/components/header.vue';
    import SubHeaderUsersSection from '@/components/subHeaderAdminUsers.vue';
    import LstBookGuest from '@/components/lstUserAdmin.vue';

    export default {
    components: {
        HeaderSection,
        SubHeaderUsersSection,
        LstBookGuest
    }
};
</script>
