Vue.component('signin',{
    data(){
        return {
            email:'',
            password:'',
        }
    },
    template:`
    <div class="mx-auto" v-if="position === signin" style="width: 30%; margin-top: 15%">
        <div class="card">
            <h5 class="card-header">
                login
            </h5>
            <div class="card-body">
                <div class="form-group " >
                    <form>
                            <input type="text" v-model="email" class="form-control" id="exampleFormControlInput1" placeholder="your email/username here" style="font-size:'12px'">
                            <br>
                            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="your password">
                            <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                            </small>
                            <br>
                            <a href="#" class="btn btn-outline-primary" v-on:click.prevent="login()">Submit</a>    
                    </form>
                <p>or</p>
                <div id="my-signin2"></div>
                    <div class="g-signin2" data-onsuccess="onSignIn"></div>
                </div>
            </div>
        </div>   
    </div>
    `
})