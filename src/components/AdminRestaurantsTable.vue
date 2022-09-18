<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id }
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
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
      }
    },
    {
      id: 2,
      name: 'Gerson Hoeger',
      tel: '883.719.6911',
      address: '3807 Hermiston Ridge',
      opening_hours: '08:00',
      description: 'rerum animi sit',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=42.58778960524019',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 3,
      name: 'Rollin Lind',
      tel: '566.196.1634',
      address: '41675 John Crest',
      opening_hours: '08:00',
      description:
        'Libero iste tempora et quasi aliquid enim est. Voluptate ut cupiditate vel molestiae vero rerum commodi. Suscipit aut at quam. Illo architecto quia nisi molestiae dolor. Vitae et iusto corporis rem molestiae. Accusamus sunt labore ex quo ut asperiores iure.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=7.20815916546913',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
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
      }
    },
    {
      id: 5,
      name: 'Mikayla Hirthe',
      tel: '(246) 302-9197',
      address: '0970 Walker Drives',
      opening_hours: '08:00',
      description:
        'Explicabo eum ducimus omnis. Voluptatem doloremque qui ut nihil nihil. Aperiam quo molestias exercitationem magnam et impedit. Assumenda ut sint doloribus beatae voluptas porro explicabo.\n \rSuscipit eius aut et. In voluptas beatae. Exercitationem numquam sint fugiat sint. Nulla voluptatem dolor facilis sit totam veritatis. Eaque maiores ea et ducimus velit. Tempora et quod quis amet temporibus.\n \rSit sunt est id eos. Ut facilis voluptatem voluptatem nostrum dolore dolor. Quis reprehenderit facere eos dolore minus. Veritatis est eum quae.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=15.937175703063433',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 6,
      name: 'Henry Witting',
      tel: '(752) 372-4666 x66789',
      address: '942 Gorczany Parkway',
      opening_hours: '08:00',
      description: 'qui voluptatem natus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=26.85549499805362',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 7,
      name: 'Hertha Beer',
      tel: '862.262.1031',
      address: '2976 Kasey Flat',
      opening_hours: '08:00',
      description:
        'Autem molestiae odio. Ex reiciendis quasi qui perspiciatis. Officia dolores commodi ut. Nihil tempore blanditiis omnis ipsum.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=91.58239513711952',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 8,
      name: 'Easton Hermann',
      tel: '1-029-311-4872 x2332',
      address: '145 Edyth Brooks',
      opening_hours: '08:00',
      description:
        'Expedita rerum quos. Veniam quia itaque placeat impedit minima. Quas incidunt eum animi minus cum soluta explicabo cumque sed.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=14.252296731939328',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 9,
      name: 'Lon Deckow',
      tel: '1-852-566-4893 x5407',
      address: '86858 Prohaska Brook',
      opening_hours: '08:00',
      description:
        'Provident et ut sequi pariatur et quia eos. Repellendus est non molestiae quia reprehenderit ipsa qui doloribus. Debitis et sit nulla quis iure laborum perferendis dolor debitis. Sed quae accusantium aut aliquam mollitia quisquam. Expedita est praesentium deserunt. Et necessitatibus asperiores.\n \rAlias aut quisquam dolores aut aut voluptas perferendis. Incidunt consequuntur cupiditate quia quia labore est eveniet et. Corrupti error consectetur laboriosam qui praesentium explicabo ipsam. Laboriosam quam aut labore aut qui sint autem alias. Rerum voluptas voluptatibus. Et impedit aut magni ratione mollitia.\n \rOfficiis accusantium enim possimus suscipit. Sequi sint quaerat consequatur eum assumenda. Totam facere delectus sed voluptates deserunt beatae aliquam.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=25.427115195579077',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
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
      }
    },
    {
      id: 11,
      name: 'Antonia Hahn',
      tel: '762.419.5466 x2379',
      address: '38544 Lubowitz Pike',
      opening_hours: '08:00',
      description:
        'Velit ipsam nam nulla facere debitis cum eius dolorem modi. Labore voluptatem molestiae enim voluptatem distinctio atque. Quidem libero mollitia temporibus dolor et doloremque impedit. Et esse a amet consequatur delectus possimus ab voluptatem. Dicta dolorum quia sunt officia sit.\n \rRem dolorem tempora nesciunt fuga omnis at rerum. Fugit commodi neque deserunt rerum nisi praesentium libero ab. Voluptatem reiciendis quasi aut asperiores aperiam delectus. Omnis non facilis ut eligendi et et inventore distinctio.\n \rVeniam dolor expedita mollitia atque fugiat consequatur. Rem itaque inventore quisquam similique similique. Consequatur aut veniam voluptas accusamus.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=60.26259817521764',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 12,
      name: 'Jared Pouros',
      tel: '(002) 141-3627 x068',
      address: '71804 Miller River',
      opening_hours: '08:00',
      description: 'et est necessitatibus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=82.30967014818668',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 13,
      name: 'Hilario Runte II',
      tel: '680.530.6858',
      address: '00158 Leo Mall',
      opening_hours: '08:00',
      description:
        'Hic et nobis tenetur sed pariatur consequatur quas exercitationem. Aut accusamus sint repellat possimus delectus inventore. Voluptas est corporis consequatur quia nam ut voluptates perspiciatis. Consectetur magnam eum voluptatem consequatur temporibus culpa. Est rerum quod dolorem voluptates quisquam pariatur hic.',
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
      }
    },
    {
      id: 14,
      name: 'Cleve Hauck',
      tel: '(434) 772-9731',
      address: '285 Nichole Port',
      opening_hours: '08:00',
      description:
        'Quas consequatur et fugit. In quia soluta omnis. Id debitis asperiores doloribus laborum atque iure sint. Ipsum magni ab iste.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=97.07895266151596',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 15,
      name: 'Llewellyn Gottlieb',
      tel: '988.463.3598 x86875',
      address: '784 Maggio Forks',
      opening_hours: '08:00',
      description:
        'Quia omnis inventore incidunt laboriosam.\nIusto amet ea earum blanditiis sed aspernatur beatae praesentium.\nAtque non repellat.\nUt occaecati molestiae ducimus eos quo qui et consequatur.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=2.6294918002832013',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 16,
      name: 'Gregory Balistreri',
      tel: '775-109-0098 x9586',
      address: '262 Gusikowski Expressway',
      opening_hours: '08:00',
      description:
        'Eum et ea nihil debitis sit impedit aliquam itaque aperiam.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=97.71647930226808',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 17,
      name: 'Maddison McGlynn',
      tel: '1-117-588-2068 x142',
      address: '756 Lebsack Harbors',
      opening_hours: '08:00',
      description:
        'Omnis est sit commodi nobis iste esse rerum.\nItaque architecto quisquam pariatur sit laudantium nostrum.\nEst laboriosam non quia aperiam ea inventore recusandae.\nPlaceat fugit reprehenderit iste saepe neque.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=97.54991866071889',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 18,
      name: 'Mrs. Else King',
      tel: '880-595-9281',
      address: '334 Ritchie Bypass',
      opening_hours: '08:00',
      description: 'Adipisci alias est praesentium rerum.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=20.952466603702312',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
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
      }
    },
    {
      id: 20,
      name: 'Carolyne Mills',
      tel: '1-923-454-8052',
      address: '429 Clair Burgs',
      opening_hours: '08:00',
      description: 'Dolore eius dicta magnam sequi.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=34.822446342513366',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 21,
      name: 'Jailyn Doyle',
      tel: '1-208-068-4927 x222',
      address: '5719 Lillie Pass',
      opening_hours: '08:00',
      description:
        'Sed rerum praesentium mollitia modi non ut id iusto sint. Cum nemo illo consequatur facilis facilis et non ducimus. Quia pariatur sint libero ut ea est quaerat esse harum.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=19.118340587766404',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 22,
      name: 'Marlon Batz',
      tel: '(206) 524-1150',
      address: '3159 Leda Pines',
      opening_hours: '08:00',
      description: 'molestiae molestiae repellat',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=61.77255448534391',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 23,
      name: 'Rusty Torphy',
      tel: '286-184-9746 x79622',
      address: '127 Kuhn Manors',
      opening_hours: '08:00',
      description:
        'Aliquid occaecati modi impedit dolor voluptatibus quia fugiat. Blanditiis nostrum ratione quae et dolorem quam nostrum nihil. Rerum tempora qui libero tenetur sequi voluptatem sit repellendus ad. Voluptatem hic quia ut impedit id ut architecto dolore. Eum omnis est est ut dolores tempore earum.\n \rQuo nam qui fugit commodi. Voluptas vero nisi aperiam. Aut ut autem maxime commodi quidem. Mollitia quidem in illum ipsa ullam dolorem reiciendis. Omnis deserunt amet quidem.\n \rUt et ipsum. Expedita doloremque culpa nemo vero. Placeat sed ea omnis distinctio velit et dolor quaerat. Eveniet aut dolorem magnam voluptatem tempora provident architecto quis.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=24.438735994877312',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
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
      }
    },
    {
      id: 25,
      name: 'Althea VonRueden',
      tel: '109.974.6637 x1591',
      address: '3596 Hoeger Circle',
      opening_hours: '08:00',
      description:
        'Perferendis voluptatibus illum excepturi dolores repellendus molestiae et recusandae.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=29.842267566557588',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 26,
      name: 'Casandra Moore',
      tel: '226-984-0602 x67721',
      address: '5613 Levi Island',
      opening_hours: '08:00',
      description: 'Placeat ut sunt est.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=2.9530600681677566',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 27,
      name: 'Chet Eichmann',
      tel: '041.353.0340 x812',
      address: '01900 Veum Isle',
      opening_hours: '08:00',
      description:
        'Quod accusamus eos quidem itaque fugiat ab veniam est est. Impedit ipsam nihil neque est voluptatum adipisci. Similique non illum ipsum omnis. Perspiciatis consequuntur natus. Rerum beatae minima doloremque voluptate eligendi eveniet nobis ipsam facilis.\n \rMolestiae iure dolorem. Qui et aut illo et tenetur delectus eum et. Non alias placeat quam.\n \rAperiam possimus doloremque quia enim quia. Dolore et aperiam. Aut dolor quis corporis aut aut eos dicta inventore odit. Harum iusto velit unde ea id natus ea ut.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=44.62584149486675',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 28,
      name: 'Justice Considine DDS',
      tel: '808-189-0378 x326',
      address: '8409 Claire Glens',
      opening_hours: '08:00',
      description: 'officia excepturi sit',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=69.63485955385067',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 29,
      name: 'Jerrell Orn',
      tel: '594.937.6784 x89093',
      address: '347 Wolff Bridge',
      opening_hours: '08:00',
      description:
        'Iure possimus qui eveniet nulla laborum sint assumenda.\nUt sed inventore illo at ea sit.\nEt architecto delectus mollitia porro accusamus ut facere officiis.\nNemo quasi iste maxime adipisci officia.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=69.04722041598691',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 30,
      name: 'Mr. Caesar Pacocha',
      tel: '386.136.7896 x62089',
      address: '845 Leuschke Parkways',
      opening_hours: '08:00',
      description:
        'A temporibus cumque.\nAutem occaecati ratione repellat fugiat qui exercitationem necessitatibus beatae.\nAliquam mollitia nisi fugit facere totam autem.\nVel dolorem doloremque perspiciatis animi quos.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=71.50212067594057',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 31,
      name: 'Marguerite Grady',
      tel: '250.899.9321 x1118',
      address: '088 Eloisa Skyway',
      opening_hours: '08:00',
      description:
        'Laboriosam ea possimus velit fuga quis nulla accusantium consequuntur culpa.\nEx ratione unde dicta qui eos molestias.\nEt voluptas mollitia cum amet qui nobis facere in.\nEst deserunt exercitationem voluptatem et natus dolores quia.\nDoloribus unde est recusandae sit quidem omnis qui repellendus exercitationem.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=45.88726267255472',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 32,
      name: 'Zachary Gusikowski',
      tel: '425-361-4596',
      address: '220 Gregory Divide',
      opening_hours: '08:00',
      description: 'Quis et quia modi.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=39.176900300717435',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 33,
      name: 'Delbert Heller',
      tel: '1-181-650-2141 x2588',
      address: '4641 Dickinson Mount',
      opening_hours: '08:00',
      description:
        'Corrupti alias natus id enim. Sint cupiditate omnis sunt. Sed voluptate minima. Explicabo molestias aut asperiores sit id. Sunt ea consequatur sit architecto ipsa dolorem et eius. A quibusdam porro eum molestias.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=51.14255445949263',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 34,
      name: 'Rafael Collins',
      tel: '179-293-9702',
      address: '571 Ondricka Crossing',
      opening_hours: '08:00',
      description: 'est quis omnis',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=72.50525161600854',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 35,
      name: 'Marisol Daniel',
      tel: '(750) 111-3877',
      address: '08164 Uriel Port',
      opening_hours: '08:00',
      description:
        'Veniam mollitia asperiores aliquid eum. Quos ab quo. Nulla ullam amet id odit aut voluptatem maiores cupiditate. Accusantium voluptatem repellendus assumenda inventore inventore aut asperiores quidem. Autem tenetur corrupti a aut numquam ea culpa dolor.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=61.779194053488126',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 36,
      name: 'Allene Wunsch',
      tel: '237-182-6720 x46497',
      address: '331 Reid Burgs',
      opening_hours: '08:00',
      description:
        'Ea maiores rem ex repudiandae aut ad.\nPorro consequatur amet.\nConsectetur aut optio dolor.\nQuia mollitia sint id sunt sunt quaerat maxime.\nQuidem id necessitatibus et.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=56.62891183364411',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 37,
      name: 'Eddie Cremin',
      tel: '528-788-1961 x70733',
      address: '9102 Aiden Isle',
      opening_hours: '08:00',
      description: 'Aut provident omnis.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=70.34053279303016',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 38,
      name: 'Alexandrine Cremin',
      tel: '261-918-6380 x76499',
      address: '04582 Cecile Lane',
      opening_hours: '08:00',
      description:
        'Quisquam optio dolorum omnis libero quaerat.\nAt aperiam qui pariatur numquam accusantium impedit.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=72.65904445619434',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 39,
      name: 'Sabryna Greenholt III',
      tel: '444.667.4633 x00008',
      address: '66923 Marion Rue',
      opening_hours: '08:00',
      description: 'in quo voluptas',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=66.45852990838338',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 40,
      name: 'Janie Bernhard',
      tel: '367.877.0121',
      address: '979 Bertrand Inlet',
      opening_hours: '08:00',
      description:
        'Ut possimus ratione repudiandae occaecati magni odit ut. Ut aut laboriosam ut ad. Veniam provident reprehenderit. Dolorem vel asperiores autem libero at repellendus.\n \rDeserunt mollitia a rerum qui perspiciatis est quia qui quos. Quae commodi dolore nihil tempore veniam adipisci. Dolor autem cupiditate rerum ex nulla fugit. Dolor iure in quisquam impedit omnis ipsam aperiam quo est. Ut veritatis officia illo possimus deserunt nisi dolorem. Nihil non iste et eum corporis voluptatem.\n \rQuis aut quibusdam et necessitatibus ratione voluptatem id sapiente est. Optio harum voluptatem sed officiis vel est reprehenderit perspiciatis consequatur. Expedita necessitatibus aut. Aut quia eum hic rerum.',
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
      }
    },
    {
      id: 41,
      name: 'Danyka McCullough',
      tel: '1-206-544-4275',
      address: '208 Queen Walk',
      opening_hours: '08:00',
      description:
        'Occaecati dolores assumenda esse cum velit omnis.\nExcepturi et alias et rerum est est.\nSequi rerum mollitia.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=90.56055565446923',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
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
      }
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
      }
    },
    {
      id: 44,
      name: 'Jed Hagenes',
      tel: '(278) 322-4497',
      address: '4585 David Run',
      opening_hours: '08:00',
      description:
        'Quidem et porro dolor earum laborum eos temporibus dolorem sint.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=25.954066708076894',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 45,
      name: 'Jorge White',
      tel: '757.451.8990 x1415',
      address: '9546 Kiera Haven',
      opening_hours: '08:00',
      description:
        'Vero fuga sunt modi ipsam explicabo. Voluptatem doloribus et id voluptatem doloremque officia commodi repellendus sapiente. Consequatur illo ut.\n \rIncidunt et odit. Quasi eius ducimus enim dolores. Quis eius quia aut.\n \rQuod possimus laudantium quia. Suscipit odit iusto autem veritatis quod amet et rerum. Est enim quia et similique modi voluptatum tenetur eligendi.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=63.9469197776489',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
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
      }
    },
    {
      id: 47,
      name: 'Ms. Rickie Hermann',
      tel: '(521) 387-1714',
      address: '42833 Donato Common',
      opening_hours: '08:00',
      description:
        'Suscipit optio debitis eum optio.\nDistinctio reprehenderit autem.\nReprehenderit sint hic consequatur et cum doloribus aut.\nIusto sed possimus repellat voluptatem ut qui.\nMollitia quos non numquam sequi repellat praesentium molestiae.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=35.277161390740574',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
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
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    },
    {
      id: 49,
      name: 'Josie Schulist I',
      tel: '1-379-606-4983 x5007',
      address: '79307 Beahan Stravenue',
      opening_hours: '08:00',
      description:
        'Culpa officiis quibusdam. Architecto quam sint vel qui consequatur excepturi illum aut neque. Officia ut ut id voluptatibus non in praesentium possimus iure.',
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
      }
    },
    {
      id: 50,
      name: 'Magdalen Yundt',
      tel: '671-365-7335',
      address: '75881 Milan Spur',
      opening_hours: '08:00',
      description:
        'Dolor aperiam velit maiores repudiandae ut ut cupiditate labore et.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=19.43671298788403',
      viewCounts: 0,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      }
    }
  ]
}

export default {
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
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      )
    }
  }
}
</script>