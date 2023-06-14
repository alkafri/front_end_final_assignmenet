<template>
    <div class="book-form">
        <h2 class="form-title">{{ formTitle }}</h2>
        <label>Title - {{ currentTitle }}</label>
        <input type="text" placeholder="Insert new title..." v-model="newTitle" />
        <label>Author - {{ currentAuthor }}</label>
        <input type="text" placeholder="Insert new author..." v-model="newAuthor" />
        <label>Quantity - {{ currentQuantity }}</label>
        <input type="text" placeholder="Insert new quantity..." v-model="newQuantity" />
        <div class="button-container">
            <button class="save-button" @click="saveChanges">Save changes</button>
            <button class="discard-button" @click="discardChanges">Discard changes</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    
    export default {
        data() {
        return {
            formTitle: "<Add/Edit> Book",
            currentTitle: "<current title>",
            newTitle: "",
            currentAuthor: "<current author>",
            newAuthor: "",
            currentQuantity: "<current quantity>",
            newQuantity: ""
        };
        },
        methods: {
        saveChanges() {
            // Logic to save the changes
        },
        discardChanges() {
            // Logic to discard the changes
        }
        }
    };
</script>

<style>
.book-form {
    width: 350px;
    height: 450px;
    background-color: #d9d9d9;
    font-size: 14px;
    color: black;
    padding: 20px;
    border-radius: 8px;
}

.form-title {
    font-size: 18px;
}

label {
    display: block;
    margin-top: 15px;
}

input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
}

.button-container {
    margin-top: 20px;
}

button {
    width: 125px;
    border-radius: 4px;
    font-size: 12px;
    padding: 8px;
    margin-right: 10px;
    cursor: pointer;
}

.save-button {
    background-color: #d9d9d9;
    color: white;
}

.discard-button {
    background-color: #c3c3c3;
    color: black;
}
</style>
