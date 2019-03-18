Vue.component('allpublish',{
    props:['articles'],
    template:`
        <div class="mx-auto" style="width: 75%;  margin-top:10%">
            <template v-for="(key,index) in articles">
                <template v-if="key.statusPublish== true">
                    <p>{{key.created_at}}</p>
                    <h3>
                        {{key.Title}}
                    </h3>
                        <p>{{key.Article}}</p>
                        <button class="btn btn-outline-success"><i class="fas fa-heartbeat"></i></button>
                </template>
            </template>
        </div>
    `
})