const url = 'http://localhost:3000'

const app = new Vue ({
    el: "#app",
    data: {
        token:'',
        email:'',
        username:'',
        password:'',
        articles: [],
        position:'all'
    },
    created() {
        axios
            .get(`${url}/listarticle`)
            .then(({data})=>{
                this.articles = data;
            })
            .catch(err=>{
                this.articles = {
                    error:err
                }
            })
    },
    watch:{
        position: function(newPosition, oldPosition){
            console.log(newPosition, oldPosition)
        }
    },
    methods: {
        likeit(){
            if (!this.token) {
                this.position = 'login'
            } else {
                
            }
        },
        onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            // console.log('Name: ' + profile.getName());
            // console.log('Image URL: ' + profile.getImageUrl());
            // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
          var token=googleUser.getAuthResponse().id_token;
            $.ajax({
                url:`${baseURL}/user/Gsignin`,
                method:'POST',
                data:{
                  token
                }
            })
            .done(function(response){
                console.log(response)
            })
            .fail(function(error){
              console.log(error)
            })
        },
        signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            });
        },
        login(){
            axios
                .post(`${url}/users/signin`,{
                email:this.email,
                password:this.password
                })
                .then(data=>{
                    localStorage.setItem('token',data)
                    token = localStorage.getItem('token') 
                })
                .catch(err=>{
                    if (err.status === 404) {
                        this.changePosition('register')
                    } else {
                        console.log(err)
                    } 
                })
        },
        
        addArticle() {
            axios
                .post(`${url}/addarticle`, {
                    title: this.Title,
                    article: this.Article,
                    statusPublish:this.statusPublish
                })
                .then(({data})=>{
                    this.articles.push(data)
                    this.Title = '',
                    this.Article = '',
                    this.statusPublish = ''
                })
                .catch(err=>{
                    console.log(err)
                })

        },
        updatearticle(){
            console.log(this.Id,this.Article,this.Title,'ini loh')
            axios
                .put(`${url}/updatearticle/${this.Id}`,{
                    title: this.Title,
                    article: this.Article,
                    statusPublish:this.statusPublish
                })
                .then(({data})=>{
                    console.log(data,'INI DATANYA')
                    this.articles.push(data)
                    this.Id = ''
                    this.Title = ''
                    this.Article = ''
                    this.statusPublish = ''
                })
                .catch(err=>{
                    swal(err)
                })
        },
        deleteArticle(id,index){
            axios
            .delete(`${url}/deletearticle/${id}`,{
            })
            .then(data=>{
                // console.log(index)
                this.articles.splice(index,1)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
})