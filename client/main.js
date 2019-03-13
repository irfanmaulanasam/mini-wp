const url = 'http://localhost:3000'

const app = new Vue ({
    el: "#app",
    data: {
        Title: '',
        Article: '',
        statusPublish:'',
        articles: []
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
    methods: {
        addArticle() {
            
            axios
                .post(`${url}/addarticle`, {
                    title: this.Title,
                    Article: this.Article,
                    statusPublish:this.statusPublish
                })
                .then(data=>{
                    this.Title = '',
                    this.Article = '',
                    this.statusPublish = ''
                })
                .catch(err=>{
                    console.log(err)
                })

        }
    }
})