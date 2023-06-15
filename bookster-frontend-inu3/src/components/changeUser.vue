/**
 * Author: Ahmad AlKafri
 * Date: 14e Juni
 * 
 * This files allows the [Admin] to delete/promote user. 
 */

<template>
    <div class="change-user-form">
        <h2 class="form-title">Change user settings</h2>
        <p class="message">Are you sure you want to {{ action }} user {{ username }}?</p>
        <div class="buttons">
            <button class="proceed-button">Proceed</button>
            <button class="cancel-button">Cancel</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChangeUser',
        props: {
        username: {
            type: String,
            required: true,
        },
        action: {
            type: String,
            required: true,
        },
        },
    };
</script>

<style>
.change-user-form {
    width: 350px;
    height: 350px;
    background-color: #d9d9d9;
    font-size: 14px;
    color: black;
}

.form-title {
    font-size: 18px;
}

.message {
    margin-top: 20px;
}

.buttons {
    margin-top: 20px;
}

button {
    width: 100px;
    border-radius: 5px;
    font-size: 12px;
}

.proceed-button {
    background-color: #d9d9d9;
    color: white;
}

.cancel-button {
    background-color: #c3c3c3;
    color: black;
}
</style>