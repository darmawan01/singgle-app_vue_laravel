<template id="add-post">
    <div>
        <h3>Add New Post</h3>
        <div class="col-md-6 col-offset-3">    
            <form v-on:submit.prevent="createPost">
                <div class="form-group">
                    <input v-model="post.title" class="form-control" placeholder="Title" required>
                    
                </div>
                <div class="form-group">
                    <textarea v-model="post.body" rows="10" class="form-control" placeholder="Body Text"></textarea>
                    
                </div>

                <button class="btn btn-primary">Create</button>
                <router-link class="btn btn-warning" v-bind:to="'/'">Cancle</router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: ""
      }
    };
  },

  methods: {
    createPost() {
      let uri = "http://localhost:8000/post";

      Axios.post(uri, this.post).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>

</style>