<template>
  <div class="card mb-3">
    <div class="card-header">
      <strong> {{ followersCounts }} </strong>followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: follower.id } }"
      >
        <img :src="follower.image" width="60" height="60" class="mr-1" />
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
      followers: this.user.Followers
    }
  },
  computed: {
    followersCounts() {
      return this.user.Followers.length
    }
  }
}
</script>