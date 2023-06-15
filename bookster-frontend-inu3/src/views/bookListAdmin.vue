/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file is to show the [Admin] view of book list. Admin have all users privileges: Check see all book list (book title, author and availability), Can order books, or search for a book
 * In addition, Admin can also add/edit/delete a book
 * This file uses the following components: header.vue, subHeaderAdmin.vue, lstBookAdmin.vue
 */

<template>
    <div>
        <header-section />
        <br><br>
        <sub-header-section />
        <lst-book-admin />
        </div>
    </template>
    
    <script>
    import HeaderSection from '@/components/header.vue';
    import SubHeaderSection from '@/components/subHeaderAdmin.vue';
    import LstBookAdmin from '@/components/lstBookAdmin.vue';
    
    export default {
        components: {
        HeaderSection,
        SubHeaderSection,
        LstBookAdmin
        }
    };
</script>