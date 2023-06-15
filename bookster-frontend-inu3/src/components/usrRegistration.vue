<template>
    <div class="registration-form">
        <div class="form-header">
            <h2>Register</h2>
        </div>
        <div class="form-body">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Type your username..." class="text-input" />
    
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Type your password..." class="text-input" />
    
            <p class="login-link">Already have an account? Sign in <a href="/">here!</a></p>
    
            <button class="register-button">Register new account</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserRegistration',

    mounted() {
        const registerButton = document.querySelector('.register-button');
        registerButton.addEventListener('click', this.registerUser);
    },
    beforeDestroy() {
        const registerButton = document.querySelector('.register-button');
        registerButton.removeEventListener('click', this.registerUser);
    },

    methods: {
        registerUser() {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const username = usernameInput.value;
            const password = passwordInput.value;

            const userData = {
                username,
                password,
                role: 'user'
            };

            fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'Account successfully created') {
                        alert('Congratulations! Your account is created');
                        this.$router.push('/');
                    } else {
                        alert('ERROR!' + data.message);
                    }
                })
                .catch(error => {
                    alert('ERROR!' + error.message);
                });
        },
    },
};
</script>

<style>
.registration-form {
    width: 30%;
    height: 310px;
    font-size: 18px;
    color: #000000;
    background-color: #d9d9d9;
    padding: 10px;
    align-content: center;
    margin: auto; 
}

.form-header {
    padding: 1px;
    width: 90%;
    margin: auto;
    align-content: center;
    text-align: center;
    background-color: #828282;
    color: #ffffff;
}

.form-body {
    background-color: #d9d9d9;
    padding: 10px;
    justify-content: space-between;
    width: 80%;
    margin: auto;
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

.login-link {
    font-size: 12px;
}

.login-link a {
    color: #828282;
    font-weight: bold;
}

.register-button {
    background-color: #828282;
    color: #ffffff;
    width: 100%;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 45px;
    cursor: pointer;
    font-weight: bold;
}
</style>


