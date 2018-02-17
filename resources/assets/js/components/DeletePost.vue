<template id="post-delete">
    <div>
        <h3>Delete post {{ post.title }}</h3>

        <form v-on:submit.prevent="deletePost">
            <p>The Action Cannot Be Undo</p>

            <button type="submit" class="btn btn-danger">Delete</button>
            <router-link class="btn btn-primary" v-bind:to="'/'">Cancle</router-link>
        </form>
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

  created() {
    let uri = "http://localhost:8000/post/" + this.$route.params.id + "/edit";

    Axios.get(uri, this.post).then(response => {
      this.post = response.data;
    });
  },

  methods: {
    deletePost() {
      let uri = "http://localhost:8000/post/" + this.$route.params.id;

      Axios.delete(uri, this.post).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>