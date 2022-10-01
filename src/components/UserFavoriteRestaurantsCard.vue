<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoriteRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favoriteRestaurant in favoriteRestaurants"
        :key="favoriteRestaurant.id"
        :to="{ name: 'restaurant', params: { id: favoriteRestaurant.id } }"
      >
        <img
          :src="favoriteRestaurant.image | emptyImage"
          width="60"
          height="60"
          class="mr-1 mb-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    favoriteRestaurants: {
      type: Array,
      default: () => []
    }
  }
}
</script>