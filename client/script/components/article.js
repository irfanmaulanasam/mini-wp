Vue.component('article',{
    props:['datas','status'],
    template:`
    <div class="mx-auto" style="width: 75%;">
        <template v-for="(key,index) in articles">
            <template v-if="key.statusPublish== ${status}">
                <p>{{key.created_at}}</p>
                <h3>
                    {{key.Title}}
                </h3>
                    <p>{{key.Article}}</p>
                    <button class="btn btn-outline-success" v-on:click="position ='updateEditor', Id = key._id,Title = key.Title, Article = key.Article , statusPublish = true">edit</button>
                    <button class="btn btn-outline-danger" v-on:click="deleteArticle(key._id,index)">delete</button>
            </template>
        </template>
    </div>
    `
})