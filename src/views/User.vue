<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />
    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />
        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />
        <!-- UserFavoriteRestaurantsCard -->
        <UserFavoriteRestaurantsCard
          :favorite-restaurants="favoriteRestaurants"
        />
      </div>
    </div>
    </template>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoriteRestaurantsCard from './../components/UserFavoriteRestaurantsCard'
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoriteRestaurantsCard,
    Spinner
  },
  data() {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoriteRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoriteRestaurants: [],
      isLoading: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params
    this.fetchUser(userId)
    next()
  },
  methods: {
    async fetchUser(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.get({ userId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { profile, isFollowed } = data
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = profile

        const commentSet = new Set()

        this.comments = Comments.filter(
          comment =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        )

        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: this.comments.length,
          favoriteRestaurantsLength: FavoritedRestaurants.length
        }

        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.favoriteRestaurants = FavoritedRestaurants
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>