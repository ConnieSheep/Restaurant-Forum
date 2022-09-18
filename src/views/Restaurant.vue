<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-detail="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail'
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment'

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
    updatedAt: '2022-09-15T14:05:17.155Z',
    CategoryId: 2,
    Category: {
      id: 2,
      name: '日本料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  },
  isFavorited: false,
  isLiked: false
}

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
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      ;(this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      }),
        (this.restaurantComments = dummyData.restaurant.Comments)
    },
    afterDeleteComment(commentId) {
      console.log('afterDeleteComment', commentId)
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      )
    },
    afterCreateComment(payload) {
      console.log(payload)
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        restaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>