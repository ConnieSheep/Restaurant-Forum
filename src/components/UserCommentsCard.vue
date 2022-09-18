<template>
  <div class="card">
    <div class="card-header">
      <strong> {{ UserCommentCounts }} </strong>已評論的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="comment in comments"
        :key="comment.id"
        :to="{ name: 'restaurant', params: { id: comment.id } }"
      >
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
          class="mr-1 mb-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comments: this.user.Comments
    }
  },
  computed: {
    UserCommentCounts() {
      return this.user.Comments.length
    }
  }
}
</script>