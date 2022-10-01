<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>
      <hr />
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="card mb-3"
        style="max-width: 540px; margin: auto"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              <img class="card-img" :src="restaurant.image | emptyImage" />
            </router-link>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.name }}</h5>
              <span class="badge badge-secondary"
                >收藏數：{{ restaurant.FavoriteCount }}</span
              >
              <p class="card-text">
                {{ restaurant.description }}
              </p>
              <router-link
                :to="{ name: 'restaurant', params: { id: restaurant.id } }"
                class="btn btn-primary mr-2"
                >Show</router-link
              >

              <button
                v-if="restaurant.isFavorited"
                @click.stop.prevent="deleteFavorite(restaurant.id)"
                type="button"
                class="btn btn-danger mr-2"
                :disabled="isProcessing"
              >
                移除最愛
              </button>
              <button
                v-else
                @click.stop.prevent="addFavorite(restaurant.id)"
                type="button"
                class="btn btn-primary"
                :disabled="isProcessing"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import NavTabs from './../components/NavTabs'
import restaurantsAPI from './../apis/restaurants'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      isLoading: true,
      isProcessing: false
    }
  },
  created() {
    this.fetchTopRestaurants()
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        this.isLoading = true
        const { data } = await restaurantsAPI.getTopRestaurants()

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurants = data.restaurants
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法載入人氣餐廳，請稍後再試'
        })
      }
    },
    async addFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFavorite({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants
          .map(restaurant => {
            if (restaurant.id !== restaurantId) {
              return restaurant
            } else {
              return {
                ...restaurant,
                FavoriteCount: restaurant.FavoriteCount + 1,
                isFavorited: true
              }
            }
          })
          .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteFavorite({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants
          .map(restaurant => {
            if (restaurant.id !== restaurantId) {
              return restaurant
            } else {
              return {
                ...restaurant,
                FavoriteCount: restaurant.FavoriteCount - 1,
                isFavorited: false
              }
            }
          })
          .sort((a, b) => b.FavoriteCount - a.FavoriteCount)
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)

        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍後再試'
        })
      }
    }
  }
}
</script>