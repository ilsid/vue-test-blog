<template>
  <div class="mt-100 layout-column align-items-center justify-content-center">
    <h1>Blog Posts</h1>
    <div>
      <button data-testid="new-button" @click="onNewPostClick">New Post</button>
    </div>

    
    <div v-if="showForm" class="card flex layout-column px-30">
      <h2 class="text-center">{{ formTitle }}</h2>
      <input v-model="title" :data-testid="titleTestId" type="text" placeholder="Title"><br>
      <textarea v-model="content" :data-testid="contentTestId" placeholder="Content"></textarea><br>
      <input v-model="author" :data-testid="authorTestId" type="text" placeholder="Author"><br>
      <button data-testid="save-button" class="mx-auto" @click="onSavePostClick">Save</button>
    </div>

    <div v-show="!showForm" v-for="(post, index) in posts" :key="index" class="flex layout-column align-items-center justify-content-center">
      <div  class="card px-50">
        <h2 data-testid="title">Title : {{ post.title }} </h2>
        <p data-testid="content">Content : {{ post.content }}</p>
        <p data-testid="author">Author : {{ post.author }}</p>
      </div>
      <div>
        <button data-testid="edit-button" @click="this.editPost(index)">Edit</button>
        <button data-testid="delete-button" @click="this.deletePost(index)">Delete</button>
      </div>
    </div> 

        
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      selectedPostIndex: -1,
      title: '',
      content: '',
      author: '',
      showForm: false
    };
  },

  computed: {
    formTitle() {
      return this.editing() ? 'Edit Post' : 'Create New Post';
    },  
    titleTestId() {
      return this.editing() ? 'title' : 'new-title';
    },
    contentTestId() {
      return this.editing() ? 'content' : 'new-content';
    },
    authorTestId() {
      return this.editing() ? 'author' : 'new-author';
    }
  },

  methods: {
    onNewPostClick() {
      this.showForm = true;
    },

    onSavePostClick() {
      if (!this.validatePost()) {
        return;
      }

      let post = {
        title: this.title,
        content: this.content,
        author: this.author
      }
      
      if (this.selectedPostIndex > -1 ) {
        this.posts[this.selectedPostIndex] = post;
        this.selectedPostIndex = -1;
      } else {
        this.posts.push(post);
      }
      
      this.title = this.content = this.author = '';
      this.showForm = false;
    },

    deletePost(index) {
      this.posts.splice(index, 1);
    },

    editPost(index) {
      let post = this.posts[index];
      this.selectedPostIndex = index;
      
      this.title = post.title;
      this.content = post.content;
      this.author = post.author;
      
      this.showForm = true;
    },

    validatePost() {
      let fields = [this.title, this.content, this.author];

      for (let i = 0; i < fields.length; i++) {
        let fld = fields[i];
        if (fld.trim() === '') {
          alert('All fields must be set');
          return false;
        }
      }

      return true;
    },

    editing() {
      return this.selectedPostIndex > -1;
    }
  }
};
</script>

<style scoped>
  
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  input[type="text"],
  textarea {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input[type="text"]:focus,
  textarea:focus {
    outline: none;
    border-color: dodgerblue;
  }
</style>
