<template>
  <div class="card">
    <div class="card-header">
      <strong> {{ favoriteRestaurantsCounts }} </strong>收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favoriteRestaurant in favoriteRestaurants"
        :key="favoriteRestaurant.id"
        :to="{ name: 'restaurant', params: { id: favoriteRestaurant.id } }"
      >
        <img
          :src="favoriteRestaurant.image"
          width="60"
          height="60"
          class="mr-1 mb-1"
        >
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
      favoriteRestaurants: this.user.FavoritedRestaurants
    }
  },
  computed: {
    favoriteRestaurantsCounts() {
      return this.user.FavoritedRestaurants.length
    }
  }
}
</script>