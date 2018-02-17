<template id="post-list">
    <div class="row">
        <div class="pull-right">
            <router-link class="btn btn-xs btn-primary" v-bind:to="{path: '/add-post'}">
                <span class="glyphicon glyphicon-plus">
                    Add New Post
                </span>
            </router-link>
            <br>
            <br>
        </div>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Post Title</th>
                    <th>Post Body</th>
                    <th class="col-md-2">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in filteredPost" :key="post.id">
                    <td>{{post.id}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.body}}</td>
                    <td>
                        <router-link class="btn btn-info btn-xs" v-bind:to="{name: 'ViewPost', params: {id: post.id}}">Show</router-link>
                        <router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'EditPost', params: {id: post.id}}">Edit</router-link>
                        <router-link class="btn btn-danger btn-xs" v-bind:to="{name: 'DeletePost', params: {id: post.id}}">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            post : []
        }
    },

    created(){
        let uri = 'http://localhost:8000/post';
        
        Axios.get(uri).then(response => {
            this.post = response.data
        })
    },

    computed:{
        filteredPost(){
            if(this.post.length){
                return this.post
            }
        }
    }
};
</script>

<style scoped>

</style>