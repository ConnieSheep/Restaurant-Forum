<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ commentCounts }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: 'Nora Dibbert',
    tel: '(905) 737-3657 x4019',
    address: '51844 Tyrese Ville',
    opening_hours: '08:00',
    description:
      'Labore veritatis ipsa doloremque qui accusantium laudantium deserunt dolor consequatur. Ratione quidem sed velit suscipit cum sapiente repellat natus et. Ea ad sit laborum. Debitis earum voluptatibus temporibus aspernatur provident hic iure. Voluptatem accusantium sapiente. At corrupti distinctio fugiat vero praesentium.',
    image:
      'https://loremflickr.com/320/240/restaurant,food/?random=87.93904289218699',
    viewCounts: 1,
    createdAt: '2022-09-13T09:06:24.000Z',
    updatedAt: '2022-09-15T14:05:17.000Z',
    CategoryId: 2,
    Category: {
      id: 2,
      name: '日本料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    Comments: [
      {
        id: 101,
        text: 'Qui eum quam laboriosam dignissimos temporibus quas.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        User: {
          id: 1,
          name: 'root',
          email: 'root@example.com',
          password:
            '$2a$10$L7pTOl8czjgUoLKM9JWwiuG5OPErkrtY8JiCdoSDnfkQr4/N.jpL6',
          isAdmin: true,
          image: null,
          createdAt: '2022-09-13T09:06:24.000Z',
          updatedAt: '2022-09-13T09:06:24.000Z'
        }
      },
      {
        id: 1,
        text: 'Non ut nostrum atque vel.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$7X2GWm5JnNKK2r/0W.uDn.6Xw2uFfHRzMStVBpW6VEYC19GwGYfr.',
          isAdmin: false,
          image: null,
          createdAt: '2022-09-13T09:06:24.000Z',
          updatedAt: '2022-09-13T09:06:24.000Z'
        }
      },
      {
        id: 51,
        text: 'Velit porro nesciunt vero enim nobis in unde eaque.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$7X2GWm5JnNKK2r/0W.uDn.6Xw2uFfHRzMStVBpW6VEYC19GwGYfr.',
          isAdmin: false,
          image: null,
          createdAt: '2022-09-13T09:06:24.000Z',
          updatedAt: '2022-09-13T09:06:24.000Z'
        }
      }
    ]
  }
}

export default {
  data() {
    return {
      restaurant: {}
    }
  },
  created() {
    this.fetchRestaurant()
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = dummyData.restaurant
    }
  },
  computed: {
    commentCounts() {
      return this.restaurant.Comments.length
    }
  }
}
</script>