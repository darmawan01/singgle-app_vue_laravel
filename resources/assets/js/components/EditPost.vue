<template id="edit-post">
    <div>
        <h3>Add New Post</h3>
        <div class="col-md-6 col-offset-3">    
            <form v-on:submit.prevent="updatePost">
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
        title: '',
        body: ''
      }
    };
  },

  created() {
    let uri = "http://localhost:8000/post/" + this.$route.params.id + "/edit";

    Axios.get(uri, this.post).then(response => {
      this.post = response.data
    });
  },

  methods: {
    updatePost() {
      let uri = "http://localhost:8000/post/" + this.$route.params.id;

      Axios.patch(uri, this.post).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>
