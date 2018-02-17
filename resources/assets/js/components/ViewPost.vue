<template id="post">
    <div>
        <h3>{{post.title}}</h3>
        <strong>Body: </strong>
        <div>
            {{post.body}}
        </div>
        <br>

        <span class="glyphicon glyphicon-arrow-left"></span>
        <router-link v-bind:to="'/'">Back To Post List</router-link>
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
    let uri = "http://localhost:8000/post/" + this.$route.params.id;

    Axios.get(uri).then(response => {
      this.post = response.data;
    });
  }
};
</script>