/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This file is to show the [Guest] view of book list.
 * This file uses the following components: header.vue, subHeaderGuest.vue, lstBookGuest.vue
 */

<template>
    <div>
      <header-section />
      <br><br>
      <sub-header-section />
      <lst-book-guest />
    </div>
</template>
  
<script>
  import HeaderSection from '@/components/header.vue';
  import SubHeaderSection from '@/components/subHeaderGuest.vue';
  import LstBookGuest from '@/components/lstBookGuest.vue';
  
  export default {
    components: {
      HeaderSection,
      SubHeaderSection,
      LstBookGuest
    }
  };
</script>