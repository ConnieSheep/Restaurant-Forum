<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ detail.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">{{ detail.categoryName }}</p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        src="https://loremflickr.com/320/240/food,dessert,restaurant/"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ detail.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ detail.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ detail.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ detail.description }}</p>
      <router-link
        :to="{ name: 'restaurant-dashboard', params: { id: detail.id } }"
        class="btn btn-primary btn-border mr-2"
        >Dashboard</router-link
      >

      <button
        v-if="detail.isFavorited"
        @click.stop.prevent="deleteFavorite"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        v-else
        @click.stop.prevent="addFavorite"
        type="button"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        v-if="detail.isLiked"
        @click.stop.prevent="deleteLike"
        type="button"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        v-else
        @click.stop.prevent="addLike"
        type="button"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialDetail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      detail: this.initialDetail
    }
  },
  methods: {
    addFavorite() {
      this.detail = {
        ...this.detail,
        isFavorited: true
      }
    },
    deleteFavorite() {
      this.detail = {
        ...this.detail,
        isFavorited: false
      }
    },
    addLike() {
      this.detail = {
        ...this.detail,
        isLiked: true
      }
    },
    deleteLike() {
      this.detail = {
        ...this.detail,
        isLiked: false
      }
    }
  }
}
</script>