Vue.component('writearticle',{
    datas(){
        return {
            title:'',
            article:'',
            statusPublish:''
        }
    },
    methods:{
        wysiwyg: vueWysiwyg.default.component,
    },
    template:  `
        <div class="mx-auto" style="width: 75%;">
            <form>
                <div class="form-group">
                    <label for="article-title">Article Title</label>
                    <input type="text" v-model="Title" class="form-control" id="exampleFormControlInput1" placeholder="your title here">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Article</label>
                    <textarea class="form-control" v-model="Article" id="exampleFormControlTextarea1" cols="60" rows="20"></textarea>
                </div>
                <select v-model="statusPublish">
                    <option value="true">publish now</option>
                    <option value="false">publish later</option>
                </select>
                <a href="#" class="btn btn-outline-primary" v-on:click.prevent="addArticle()">Submit article</a>    
            </form>
        </div>
        `
})
