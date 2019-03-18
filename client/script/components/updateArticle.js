Vue.component('UpdateArticle',{
    props:['title','article','statusPublish'],
    datas(){
        return {
            title:'',
            article:'',
            statusPublish:''
        }
    },
    template:`
        <div class="mx-auto" style="width: 75%;">
            <form>
                <div class="form-group">
                    <label for="article-title">Article Title</label>
                    <input type="text" v-model="Title" class="form-control" id="exampleFormControlInput1" placeholder="your title here">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Article</label>
                    <textarea class="form-control" v-model="Article" id="exampleFormControlTextarea1" cols="60" rows="20">{{Article}}</textarea>
                </div>
                <select v-model="statusPublish">
                    <option value="true">publish now</option>
                    <option value="false">publish later</option>
                </select>
                <a href="#" class="btn btn-outline-primary" v-on:click.prevent="updatearticle()">Submit article</a>    
            </form>
        </div>
    `
})