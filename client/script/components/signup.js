Vue.component('signup',{
    data(){
        return {
            name:'',
            username:'',
            email:'',
            password:''
        }
    },
    template:`
    <div class="form-group" v-if="signup">
        <form>
            name: <input type="text" v-model="name" class="form-control" id="exampleFormControlInput1" placeholder="your name here">
            username: <input type="text" v-model="username" class="form-control" id="exampleFormControlInput1" placeholder="your username here">
            email: <input type="text" v-model="email" class="form-control" id="exampleFormControlInput1" placeholder="your email here">
            password: <input type="password" v-model="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
            <small id="passwordHelpBlock" class="form-text text-muted">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </small>
            <br>
            <a href="#" class="btn btn-outline-primary" v-on:click.prevent="register">Submit</a>    
        </form>
    </div>
    `
})