<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col" width="140">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'Admin' : 'User' }}</td>
          <td v-if="user.id !== currentUser.id">
            <button
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleRole(user.id)"
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'

const dummyUser = {
  profile: {
    id: 1,
    name: 'root',
    email: 'root@example.com',
    password: '$2a$10$L7pTOl8czjgUoLKM9JWwiuG5OPErkrtY8JiCdoSDnfkQr4/N.jpL6',
    isAdmin: true,
    image: null,
    createdAt: '2022-09-13T09:06:24.000Z',
    updatedAt: '2022-09-13T09:06:24.000Z',
    Comments: [
      {
        id: 4,
        text: 'Voluptas voluptatem optio expedita numquam.',
        UserId: 1,
        RestaurantId: 4,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 10,
        text: 'Nemo et doloribus sit numquam temporibus laudantium culpa et.',
        UserId: 1,
        RestaurantId: 10,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 11,
        text: 'Veritatis odio accusantium sed dignissimos nihil est deserunt.',
        UserId: 1,
        RestaurantId: 11,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 18,
        text: 'Perspiciatis repudiandae velit.',
        UserId: 1,
        RestaurantId: 18,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 3
        }
      },
      {
        id: 19,
        text: 'Sit est soluta eveniet explicabo ut tenetur illum odio tempora.',
        UserId: 1,
        RestaurantId: 19,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 21,
        text: 'Qui excepturi blanditiis.',
        UserId: 1,
        RestaurantId: 21,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 5
        }
      },
      {
        id: 23,
        text: 'Libero ipsum consequatur et reiciendis.',
        UserId: 1,
        RestaurantId: 23,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 3
        }
      },
      {
        id: 24,
        text: 'Aut esse autem.',
        UserId: 1,
        RestaurantId: 24,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 29,
        text: 'Cumque omnis ut eaque.',
        UserId: 1,
        RestaurantId: 29,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
      },
      {
        id: 31,
        text: 'Vitae magni qui voluptatum ad nisi dolorem nam.',
        UserId: 1,
        RestaurantId: 31,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 3
        }
      },
      {
        id: 40,
        text: 'Delectus quia ipsam necessitatibus.',
        UserId: 1,
        RestaurantId: 40,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 41,
        text: 'Eum dignissimos sint aut aut excepturi.',
        UserId: 1,
        RestaurantId: 41,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 3
        }
      },
      {
        id: 42,
        text: 'Qui illum architecto quos tenetur quia asperiores placeat ea.',
        UserId: 1,
        RestaurantId: 42,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 48,
        text: 'Ipsam est accusantium corporis sit occaecati recusandae.',
        UserId: 1,
        RestaurantId: 48,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 2
        }
      },
      {
        id: 49,
        text: 'Praesentium consequatur dolorem.',
        UserId: 1,
        RestaurantId: 49,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 52,
        text: 'Voluptas magni neque ex ipsam dolorem in.',
        UserId: 1,
        RestaurantId: 2,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 2
        }
      },
      {
        id: 53,
        text: 'Aut tempore veritatis quam.',
        UserId: 1,
        RestaurantId: 3,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 56,
        text: 'Illo et doloremque modi corporis laudantium voluptatibus itaque enim.',
        UserId: 1,
        RestaurantId: 6,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 3
        }
      },
      {
        id: 57,
        text: 'Vero fuga consequuntur.',
        UserId: 1,
        RestaurantId: 7,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 58,
        text: 'Tenetur quo doloremque fugiat consequatur ratione.',
        UserId: 1,
        RestaurantId: 8,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 59,
        text: 'Optio provident et accusamus consequatur.',
        UserId: 1,
        RestaurantId: 9,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 5
        }
      },
      {
        id: 62,
        text: 'Impedit voluptas quibusdam hic quod atque eaque et.',
        UserId: 1,
        RestaurantId: 12,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 5
        }
      },
      {
        id: 63,
        text: 'Quis vitae aut sed fugit in dolores soluta.',
        UserId: 1,
        RestaurantId: 13,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 68,
        text: 'Sit est magnam delectus autem enim quia corrupti ab.',
        UserId: 1,
        RestaurantId: 18,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 3
        }
      },
      {
        id: 70,
        text: 'Quia atque cum quia est dolor sed in nostrum.',
        UserId: 1,
        RestaurantId: 20,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 4
        }
      },
      {
        id: 71,
        text: 'Perspiciatis ut asperiores quia et.',
        UserId: 1,
        RestaurantId: 21,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 5
        }
      },
      {
        id: 74,
        text: 'Ab ut non cumque amet libero est corporis sit.',
        UserId: 1,
        RestaurantId: 24,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 77,
        text: 'Ipsum excepturi omnis sit modi ut sapiente rem accusamus.',
        UserId: 1,
        RestaurantId: 27,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 4
        }
      },
      {
        id: 86,
        text: 'Eum ipsam cumque aut repudiandae et est.',
        UserId: 1,
        RestaurantId: 36,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 4
        }
      },
      {
        id: 89,
        text: 'Reiciendis veniam nihil cum labore placeat et ut.',
        UserId: 1,
        RestaurantId: 39,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 5
        }
      },
      {
        id: 92,
        text: 'Rem odit sint nostrum nulla in nesciunt assumenda est suscipit.',
        UserId: 1,
        RestaurantId: 42,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 94,
        text: 'Qui est ut praesentium ut voluptatem qui et.',
        UserId: 1,
        RestaurantId: 44,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 3
        }
      },
      {
        id: 98,
        text: 'Quia expedita ea reiciendis fugiat ab commodi.',
        UserId: 1,
        RestaurantId: 48,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 2
        }
      },
      {
        id: 101,
        text: 'Qui eum quam laboriosam dignissimos temporibus quas.',
        UserId: 1,
        RestaurantId: 1,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 2
        }
      },
      {
        id: 103,
        text: 'Quis natus dignissimos pariatur voluptas dolorum ipsa non labore.',
        UserId: 1,
        RestaurantId: 3,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 104,
        text: 'Deserunt quibusdam eos neque illo.',
        UserId: 1,
        RestaurantId: 4,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 105,
        text: 'Quia iure alias atque optio eum.',
        UserId: 1,
        RestaurantId: 5,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 2
        }
      },
      {
        id: 109,
        text: 'Pariatur dolore voluptas sint nulla voluptate sequi aliquid illum voluptas.',
        UserId: 1,
        RestaurantId: 9,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 5
        }
      },
      {
        id: 110,
        text: 'Sint hic sit fugiat aliquid.',
        UserId: 1,
        RestaurantId: 10,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      },
      {
        id: 120,
        text: 'Qui quo a odio est qui.',
        UserId: 1,
        RestaurantId: 20,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 4
        }
      },
      {
        id: 122,
        text: 'Minus nisi qui ea sunt odit possimus.',
        UserId: 1,
        RestaurantId: 22,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 2
        }
      },
      {
        id: 125,
        text: 'Assumenda aliquam nam accusantium voluptate consequatur quasi et quisquam magnam.',
        UserId: 1,
        RestaurantId: 25,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 5
        }
      },
      {
        id: 128,
        text: 'Est quo iure.',
        UserId: 1,
        RestaurantId: 28,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
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
        id: 130,
        text: 'A non vel iusto voluptas.',
        UserId: 1,
        RestaurantId: 30,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 2
        }
      },
      {
        id: 136,
        text: 'Tenetur sit ea voluptatibus repudiandae voluptas incidunt aut.',
        UserId: 1,
        RestaurantId: 36,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 4
        }
      },
      {
        id: 141,
        text: 'Ipsam est eos ullam qui.',
        UserId: 1,
        RestaurantId: 41,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 3
        }
      },
      {
        id: 143,
        text: 'Quo aut magni magni aliquam omnis doloribus sit ratione adipisci.',
        UserId: 1,
        RestaurantId: 43,
        createdAt: '2022-09-13T09:06:24.000Z',
        updatedAt: '2022-09-13T09:06:24.000Z',
        Restaurant: {
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
          CategoryId: 1
        }
      }
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: []
  },
  isFollowed: false
}

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$L7pTOl8czjgUoLKM9JWwiuG5OPErkrtY8JiCdoSDnfkQr4/N.jpL6',
      isAdmin: true,
      image: null,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$0bsRLDKDmVokJWXIqOSFqe5x.dbMLgSaYUkaDTjNFmzMu6JnEmtrq',
      isAdmin: false,
      image: null,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$7X2GWm5JnNKK2r/0W.uDn.6Xw2uFfHRzMStVBpW6VEYC19GwGYfr.',
      isAdmin: false,
      image: null,
      createdAt: '2022-09-13T09:06:24.000Z',
      updatedAt: '2022-09-13T09:06:24.000Z'
    }
  ]
}
export default {
  components: {
    AdminNav
  },
  data() {
    return {
      users: [],
      currentUser: {}
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
      this.currentUser = dummyUser.profile
    },
    toggleRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>