<template>
    <div class="sub-header">
        <div class="search">
            <input type="text" v-model="searchQuery" class="search-box" placeholder="Search by username..." @keydown.enter="searchUser" />
        </div>
        <div class="navigate">
            <button class="custom-button1" @click="goBooks">Books</button>
            <button class="custom-button2" @click="goUsers">Users</button>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: 'subHeaderAdminUsers',
        methods: {
            searchUser() {
                this.$router.push({ query: { q: this.searchQuery } });                      
            },

            goBooks() {
                this.$router.push('/booklistadmin');
            },
            
            goUsers() {
                this.$router.push('/useradmin');
            },
        }
        
        
    }
</script>

<style>
    .sub-header {
        width: 85%;
        padding: 10px;
        align-content: center;
        margin: auto;
        display: flex;
        position: relative;
    }
    
    .search {
        width: 350px;
        height: 45px;
        display: flex;
    }

    .search-box {
        width: 350px;
        height: 45px;
    }

    .add-book {
        margin-left: 400px;
        display: flex;
    }
    
    .add-book-button {
        background-color: #686868;
        color: white;
        border: none;
        width: 200px;
        height: 45px;
        border-radius: 5px;
        cursor: pointer;
    }

    .navigate{
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
    }
    
    .custom-button1 {
        background-color: #323232;
        color: white;
        border: none;
        width: 100px;
        height: 45px;
        cursor: pointer;
    }

    .custom-button2 {
        background-color: #ededed;
        color: #323232;
        border: none;
        width: 100px;
        height: 45px;
        cursor: pointer;
    }
</style>