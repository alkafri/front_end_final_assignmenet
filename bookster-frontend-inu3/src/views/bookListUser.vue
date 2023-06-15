/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file is to show the [User] view of book list. User can: Check see all books list (book title, author and availability), Can order books, or search for a book
 * This file uses the following components: header.vue, subHeaderUser.vue, lstBookUser.vue
 */

<template>
    <div>
        <header-section />
        <br><br>
        <sub-header-section />
        <lst-book-user />
        </div>
    </template>
    
    <script>
    import HeaderSection from '@/components/header.vue';
    import SubHeaderSection from '@/components/subHeaderUser.vue';
    import LstBookUser from '@/components/lstBookUser.vue';
    
    export default {
        components: {
        HeaderSection,
        SubHeaderSection,
        LstBookUser
        }
    };
</script>