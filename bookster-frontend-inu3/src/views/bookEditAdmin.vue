/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file is the design of the "Add Book Form", it should be shown over the current "Book List" window, currently its not functioning 
 * it needs more code to make it work, currently its "Visual Design" only, 
 */

<template>
    <div>
        <header-section />
        <br><br>
        <book-form />
        </div>
    </template>
    
    <script>
    import HeaderSection from '@/components/header.vue';
    import BookForm from '@/components/bookForm.vue';

    
    export default {
        components: {
        HeaderSection,
        BookForm,
        }
    };
</script>