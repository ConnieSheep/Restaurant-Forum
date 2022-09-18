<template>
  <div class="container py-5">
    <NavTabs />
    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- RestaurantCard -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <!-- RestaurantPagination -->
    <RestaurantsPagination
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'

const dummyData = {
  restaurants: [
    {
      id: 4,
      name: 'Judd Mills',
      tel: '1-786-836-4030 x60091',
      address: '87038 Ocie Branch',
      opening_hours: '08:00',
      description: 'qui',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=4.243715106638279',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 10,
      name: 'Shane Kilback',
      tel: '404.584.8106',
      address: '2939 Larry Overpass',
      opening_hours: '08:00',
      description: 'quidem saepe qui',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=64.98937831518299',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 13,
      name: 'Hilario Runte II',
      tel: '680.530.6858',
      address: '00158 Leo Mall',
      opening_hours: '08:00',
      description: 'Hic et nobis tenetur sed pariatur consequatur quas',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=24.275744099110398',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 19,
      name: 'Adalberto Walter',
      tel: '323.815.4562',
      address: '662 Laura Greens',
      opening_hours: '08:00',
      description: 'cum',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=93.3192292841708',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 24,
      name: 'Leland Hahn',
      tel: '(500) 945-8666',
      address: '792 Dock Harbors',
      opening_hours: '08:00',
      description: 'accusantium',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=54.300353186678365',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 40,
      name: 'Janie Bernhard',
      tel: '367.877.0121',
      address: '979 Bertrand Inlet',
      opening_hours: '08:00',
      description: 'Ut possimus ratione repudiandae occaecati magni od',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=80.23545414757356',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
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
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
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
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
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
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
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
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      isFavorited: false,
      isLiked: false
    }
  ],
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    }
  ],
  categoryId: '',
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
  created() {
    this.fetchRestaurants()
  }
}
</script>