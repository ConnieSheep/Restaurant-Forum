<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'

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
    }
  ],
  comments: [
    {
      id: 11,
      text: 'Veritatis odio accusantium sed dignissimos nihil est deserunt.',
      UserId: 1,
      RestaurantId: 11,
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
      },
      Restaurant: {
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
        CategoryId: 5
      }
    },
    {
      id: 40,
      text: 'Delectus quia ipsam necessitatibus.',
      UserId: 1,
      RestaurantId: 40,
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
      },
      Restaurant: {
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
        CategoryId: 1
      }
    },
    {
      id: 57,
      text: 'Vero fuga consequuntur.',
      UserId: 1,
      RestaurantId: 7,
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
      },
      Restaurant: {
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
        CategoryId: 3
      }
    },
    {
      id: 74,
      text: 'Ab ut non cumque amet libero est corporis sit.',
      UserId: 1,
      RestaurantId: 24,
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
      },
      Restaurant: {
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
        CategoryId: 1
      }
    },
    {
      id: 103,
      text: 'Quis natus dignissimos pariatur voluptas dolorum ipsa non labore.',
      UserId: 1,
      RestaurantId: 3,
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
      },
      Restaurant: {
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
        CategoryId: 3
      }
    },
    {
      id: 128,
      text: 'Est quo iure.',
      UserId: 1,
      RestaurantId: 28,
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
      },
      Restaurant: {
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
        CategoryId: 4
      }
    },
    {
      id: 8,
      text: 'Quaerat voluptas quo eligendi aperiam ducimus.',
      UserId: 2,
      RestaurantId: 8,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$0bsRLDKDmVokJWXIqOSFqe5x.dbMLgSaYUkaDTjNFmzMu6JnEmtrq',
        isAdmin: false,
        image: null,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      Restaurant: {
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
        CategoryId: 2
      }
    },
    {
      id: 28,
      text: 'Accusantium tempora qui provident sed repellendus est quae excepturi asperiores.',
      UserId: 2,
      RestaurantId: 28,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$0bsRLDKDmVokJWXIqOSFqe5x.dbMLgSaYUkaDTjNFmzMu6JnEmtrq',
        isAdmin: false,
        image: null,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      Restaurant: {
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
        CategoryId: 4
      }
    },
    {
      id: 47,
      text: 'Voluptatibus voluptatem neque porro ut consequuntur.',
      UserId: 2,
      RestaurantId: 47,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$0bsRLDKDmVokJWXIqOSFqe5x.dbMLgSaYUkaDTjNFmzMu6JnEmtrq',
        isAdmin: false,
        image: null,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      Restaurant: {
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
        CategoryId: 5
      }
    },
    {
      id: 79,
      text: 'Voluptatem odio id.',
      UserId: 2,
      RestaurantId: 29,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$0bsRLDKDmVokJWXIqOSFqe5x.dbMLgSaYUkaDTjNFmzMu6JnEmtrq',
        isAdmin: false,
        image: null,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z'
      },
      Restaurant: {
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
        CategoryId: 4
      }
    }
  ]
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter(
        (comment) => comment.Restaurant && comment.text
      )
    }
  },
  created() {
    this.fetchFeeds()
  }
}
</script>