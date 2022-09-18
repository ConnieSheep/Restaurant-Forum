<template>
  <div class="container py-5">
    <NavTabs />
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
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
            <img class="card-img" :src="restaurant.image" />
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
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: 'Magdalen Yundt',
      tel: '671-365-7335',
      address: '75881 Milan Spur',
      opening_hours: '08:00',
      description: 'Dolor aperiam velit maiores repudiandae ut ut cupi',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=19.43671298788403',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 49,
      name: 'Josie Schulist I',
      tel: '1-379-606-4983 x5007',
      address: '79307 Beahan Stravenue',
      opening_hours: '08:00',
      description: 'Culpa officiis quibusdam. Architecto quam sint vel',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=54.6146729032426',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 48,
      name: 'Keven Schimmel',
      tel: '993-430-6582',
      address: '9144 Hermina Estates',
      opening_hours: '08:00',
      description: 'Vel atque quasi sunt rerum voluptatem voluptatum.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=40.49401106478685',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 47,
      name: 'Ms. Rickie Hermann',
      tel: '(521) 387-1714',
      address: '42833 Donato Common',
      opening_hours: '08:00',
      description: 'Suscipit optio debitis eum optio.\nDistinctio repre',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=35.277161390740574',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 46,
      name: 'Mrs. Mathilde Friesen',
      tel: '(905) 948-2272',
      address: '0190 Morar Knolls',
      opening_hours: '08:00',
      description: 'Asperiores recusandae esse.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=60.732908478046085',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 45,
      name: 'Jorge White',
      tel: '757.451.8990 x1415',
      address: '9546 Kiera Haven',
      opening_hours: '08:00',
      description: 'Vero fuga sunt modi ipsam explicabo. Voluptatem do',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=63.9469197776489',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 44,
      name: 'Jed Hagenes',
      tel: '(278) 322-4497',
      address: '4585 David Run',
      opening_hours: '08:00',
      description: 'Quidem et porro dolor earum laborum eos temporibus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=25.954066708076894',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 43,
      name: 'Raymundo Pfeffer',
      tel: '1-450-223-7560 x276',
      address: '67676 Kunde Springs',
      opening_hours: '08:00',
      description: 'Numquam perferendis assumenda iure quaerat.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=68.86995581054222',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 42,
      name: 'Kristian Shields',
      tel: '933-089-8963 x49232',
      address: '0570 Kozey Orchard',
      opening_hours: '08:00',
      description: 'quia',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=15.982742802293949',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 41,
      name: 'Danyka McCullough',
      tel: '1-206-544-4275',
      address: '208 Queen Walk',
      opening_hours: '08:00',
      description: 'Occaecati dolores assumenda esse cum velit omnis.\n',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=90.56055565446923',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
}

export default {
  components: {
    NavTabs
  },
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: true,
            FavoriteCount: 1
          }
        }
        return restaurant
      })
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id === restaurantId) {
          return {
            ...restaurant,
            isFavorited: false,
            FavoriteCount: 0
          }
        }
        return restaurant
      })
    }
  }
}
</script>