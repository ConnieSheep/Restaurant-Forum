<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8 text-center">
        <div class="card-body">
          <h5 class="card-title">
            {{ user.name }}
          </h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled">
            <li>
              <strong> {{ commentCounts }} </strong>已評論餐廳
            </li>
            <li>
              <strong> {{ favoriteCounts }} </strong>收藏的餐廳
            </li>
            <li>
              <strong> {{ followingsCounts }} </strong>followings (追蹤者)
            </li>
            <li>
              <strong> {{ followersCounts }} </strong> (追隨者)
            </li>
          </ul>
          <template v-if="currentUser.id === user.id">
            <router-link
              :to="{ name: 'user-edit', params: { id: user.id } }"
              class="btn btn-primary"
            >
              Edit
            </router-link>
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              @click.stop.prevent="cancelFollow"
              type="button"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              @click.stop.prevent="follow"
              type="button"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    initialFollow: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      currentUser: {},
      isFollowed: this.initialFollow
    }
  },
  created() {
    this.fetchCurrentUser()
  },
  methods: {
    fetchCurrentUser() {
      this.currentUser = dummyUser.currentUser
    },
    follow() {
      this.isFollowed = true
      this.user.Followers.push(this.currentUser)
    },
    cancelFollow() {
      this.isFollowed = false
      this.user.Followers.pop()
    }
  },
  computed: {
    commentCounts() {
      return this.user.Comments.length
    },
    favoriteCounts() {
      return this.user.FavoritedRestaurants.length
    },
    followersCounts() {
      return this.user.Followers.length
    },
    followingsCounts() {
      return this.user.Followings.length
    }
  }
}
</script>