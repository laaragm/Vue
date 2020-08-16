<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Sign up form</h1>
                    <hr>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input 
                            type="text"
                            id="firstName"
                            class="form-control"
                            v-model="userInfo.firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName"
                            class="form-control"
                            v-model="userInfo.lastName">
                    </div>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            class="form-control"
                            v-model="userInfo.email">
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            id="password"
                            class="form-control"
                            v-model="userInfo.password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="row">
                        <label for="storeData">Store Data?
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                                <label for="yes">
                                <input 
                                    type="radio" 
                                    id="yes"
                                    value="Yes"
                                    v-model="saveData">
                                    Yes
                                </label>
                                <label for="np">
                                <input 
                                    type="radio" 
                                    id="no"
                                    value="No"
                                    v-model="saveData">
                                    No
                                </label>
                            </div>
                        </label>
                    </div>

                    <hr>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                class="btn btn-primary"
                                @click.prevent="submitted"
                            >
                                Submit!
                            </button>
                        </div>
                    </div>
                        
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                </div>
            </div>
        </form>

        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userInfo.firstName }} {{ userInfo.lastName }} </p>
                        <p>Mail: {{ userInfo.email }} </p>
                        <p>Password: {{ userInfo.password }} </p>
                        <p>Store in Database?: {{ saveData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                },
                saveData: '', 
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true
            }
        }
    }
</script>

<style>
</style>
