<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <RestaurantUsers
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantUsers from './../components/RestaurantUsers'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$L7pTOl8czjgUoLKM9JWwiuG5OPErkrtY8JiCdoSDnfkQr4/N.jpL6',
      isAdmin: true,
      image: 'https://i.imgur.com/2js0afa.png',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$0bsRLDKDmVokJWXIqOSFqe5x.dbMLgSaYUkaDTjNFmzMu6JnEmtrq',
      isAdmin: false,
      image:
        'https://static.popdaily.com.tw/u/202203/a7c1db57-0d07-45f0-8406-2e90d2d62aa6.png',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$7X2GWm5JnNKK2r/0W.uDn.6Xw2uFfHRzMStVBpW6VEYC19GwGYfr.',
      isAdmin: false,
      image:
        'https://static.popdaily.com.tw/u/202203/ef442a53-c13b-412e-8edc-072e41c35da8.png',
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    }
  ]
}

export default {
  components: {
    NavTabs,
    RestaurantUsers
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>