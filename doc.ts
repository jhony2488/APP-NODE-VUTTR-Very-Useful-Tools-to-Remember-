import version from 'project-version'

const doc = {
  info: {
    version: '1.0.0',
    title: 'api-node-vuttr-very-useful-tools-to-remember',
    description: '',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'default',
      description: 'Endpoints of default endpoints',
    },
    {
      name: 'Admin',
      description: 'Endpoints of admin',
    },
    {
      name: 'Users',
      description: 'Endpoints of users',
    },
    {
      name: 'Tools',
      description: 'Endpoints of tools',
    },
    {
      name: 'Tags',
      description: 'Endpoints of tags',
    },
  ],
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      name: 'auth-token',
      in: 'header',
    },
  },
  definitions: {
    Error400: {
      message: 'Descrição sobre o erro',
    },
    Error406: {
      message: 'Descrição sobre o erro',
    },
    Error403: {
      message: 'Descrição sobre o erro',
    },
    ErrorTokenInvalid: { message: 'Token Invalid || Token not provided' },
    ErrorAdmin: {
      message:
        'Undefined id User Admin || User not Admin || Token Invalid || Token not provided',
    },
    DefaultIndex: {
      version,
    },
    AdminUserGet: {
      next: false,
      page: 1,
      users: [
        {
          id: 1,
          uuid: 'a7e36cda-1e6d-41d5-9771-3cf032bde15e',
          admin: true,
          name: 'Jhony Araujo',
          email: 'jhon.araujo2488@gmail.com',
          password_hash:
            '$2a$10$p2H0aNDzIMX5iP4J3KAxUey/itKKDuiOjH2iRfO4b4XkychAByhSO',
          createdAt: '2021-05-03T17:33:45.000Z',
          updatedAt: '2021-05-05T17:37:35.000Z',
        },
      ],
    },
    AdminGetUserUnic: {
      id: 1,
      uuid: 'a7e36cda-1e6d-41d5-9771-3cf032bde15e',
      admin: true,
      name: 'Jhony Araujo',
      email: 'jhon.araujo2488@gmail.com',
      password_hash:
        '$2a$10$p2H0aNDzIMX5iP4J3KAxUey/itKKDuiOjH2iRfO4b4XkychAByhSO',
      createdAt: '2021-05-03T17:33:45.000Z',
      updatedAt: '2021-05-05T17:37:35.000Z',
    },
    User: {
      id: 1,
      uuid: 'a7e36cda-1e6d-41d5-9771-3cf032bde15e',
      admin: true,
      name: 'Jhony Araujo',
      email: 'jhon.araujo2488@gmail.com',
      password_hash:
        '$2a$10$p2H0aNDzIMX5iP4J3KAxUey/itKKDuiOjH2iRfO4b4XkychAByhSO',
      createdAt: '2021-05-03T17:33:45.000Z',
      updatedAt: '2021-05-05T17:37:35.000Z',
      tools: [
        {
          id: 3,
          title: 'carbonita',
          link: 'https://carbon.now.sh/',
          description: 'description',
          createdAt: '2021-05-04T17:49:28.000Z',
          updatedAt: '2021-05-04T17:49:28.000Z',
          ToolTag: [
            {
              id: 4,
              title: 'vue.js',
              slug: 'vue.js',
              createdAt: '2021-05-04T17:49:28.000Z',
              updatedAt: '2021-05-04T17:49:28.000Z',
            },
            {
              id: 3,
              title: 'clean code',
              slug: 'clean-code',
              createdAt: '2021-05-03T17:33:58.000Z',
              updatedAt: '2021-05-03T17:33:58.000Z',
            },
            {
              id: 1,
              title: 'node do jhony',
              slug: 'node-do-jhony',
              createdAt: '2021-05-03T17:33:58.000Z',
              updatedAt: '2021-05-04T18:17:15.000Z',
            },
          ],
        },
      ],
    },
    AddUser: {
      $name: 'Jhonata Vinicius Da Silva Araujo',
      $email: 'jhon.araujo2488@gmail.com',
      $password: 'jhonyaraujo',
      codeSecret:
        'Ew%zXXq>Zk.8HhjkhK:&fjkh56+ZS^bjk%yw*$0Wn5(TUFr@B*N;qWApCfL8hjgh',
    },
    UpdateUser: {
      $name: 'Jhony Araujo',
      $email: 'jhon.araujo2488@gmail.com',
      codeSecret:
        'Ew%zXXqjljlj>Zk.8HK:&f56+ZS^%yw*$0Wnnjbjk5(TUFr@xdfsfeB*N;qWAmkljljpCfL8',
    },
    UpdatePasswordUser: { $password: 'jhonyaraujo' },
    LoginUser: {
      $email: 'jhon.araujo2488@gmail.com',
      $password: 'jhonyaraujo',
    },
    GetTools: {
      next: false,
      count: 1,
      page: 1,
      tools: [
        {
          id: 3,
          title: 'carbonita',
          link: 'https://carbon.now.sh/',
          description: 'description',
          createdAt: '2021-05-04T17:49:28.000Z',
          updatedAt: '2021-05-04T17:49:28.000Z',
          ToolTag: [
            {
              id: 4,
              title: 'vue.js',
              slug: 'vue.js',
              createdAt: '2021-05-04T17:49:28.000Z',
              updatedAt: '2021-05-04T17:49:28.000Z',
            },
            {
              id: 3,
              title: 'clean code',
              slug: 'clean-code',
              createdAt: '2021-05-03T17:33:58.000Z',
              updatedAt: '2021-05-03T17:33:58.000Z',
            },
            {
              id: 1,
              title: 'node do jhony',
              slug: 'node-do-jhony',
              createdAt: '2021-05-03T17:33:58.000Z',
              updatedAt: '2021-05-04T18:17:15.000Z',
            },
          ],
        },
      ],
    },
    CreateTools: {
      $title: 'carbonita9.0',
      $link: 'https://carbon.now.sh/',
      $description: 'description',
      $title_tags: ['angular.js'],
    },
    UpdateTools: {
      $title: 'carbonita2',
      $link: 'https://carbon.now.sh2/',
      $description: 'description2',
      $title_tags: ['vue.js'],
    },
    GetTags: {
      next: false,
      page: 1,
      tags: [
        {
          id: 4,
          title: 'angular.js',
          slug: 'angular.js',
          createdAt: '2021-05-04T18:43:52.000Z',
          updatedAt: '2021-05-04T18:43:52.000Z',
        },
        {
          id: 3,
          title: 'jhony araujo',
          slug: 'jhony-araujo',
          createdAt: '2021-05-04T18:14:23.000Z',
          updatedAt: '2021-05-04T18:14:23.000Z',
        },
        {
          id: 2,
          title: 'vue.js',
          slug: 'vue.js',
          createdAt: '2021-05-04T17:49:28.000Z',
          updatedAt: '2021-05-04T17:49:28.000Z',
        },
        {
          id: 1,
          title: 'node js',
          slug: 'node-js',
          createdAt: '2021-05-03T17:33:58.000Z',
          updatedAt: '2021-05-04T18:17:15.000Z',
        },
      ],
    },
    CreateTags: { title: 'node js' },
    Delete: {},
    CreateTagResponse: {
      id: 1,
      title: 'node js',
      slug: 'node-js',
      updatedAt: '2021-05-04T18:14:23.136Z',
      createdAt: '2021-05-04T18:14:23.136Z',
    },
    CreateToolResponse: {
      id: 1,
      title: 'carbonita9.0',
      link: 'https://carbon.now.sh/',
      description: 'description',
      user_id: '1',
      updatedAt: '2021-05-04T18:43:59.621Z',
      createdAt: '2021-05-04T18:43:59.621Z',
    },
    CreateUserResponse: {
      id: 1,
      uuid: '15e787583-4059-48ae-90c8-5848932f3a6e',
      name: 'Jhonata Vinicius Da Silva Araujo',
      email: 'jhon.araujo248088@gmail.com',
      password_hash:
        '$2a$10$b5FXyMdzZYarwZvh/YzUh.16TXXtUan9LTbMtp/mt1iwRs/UDwhKa',
      admin: true,
      updatedAt: '2021-05-05T17:37:55.931Z',
      createdAt: '2021-05-05T17:37:55.931Z',
    },
    LoginUserResponse: {
      data: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXVpZCI6ImUwY2FhNGIwLWNjNDctNGRjMi04ZmQ2LTcyZGQwNGI2YTI4MiIsImlhdCI6MTYyMDA1NzI1MH0.yqOa-dUz1yK1nIHTH0UdGR6K8vVCfpcbVZ3XPFVS7oc',
        id: 1,
        uuid: 'e0caa4b0-cc47-4dc2-8fd6-72dd04b6a282',
      },
    },
    UpdateTagResponse: [1],
    UpdateToolResponse: {
      id: 1,
      title: 'carbonita2',
      link: 'https://carbon.now.sh2/',
      description: 'description2',
      createdAt: '2021-05-03T17:33:58.000Z',
      updatedAt: '2021-05-04T18:05:55.000Z',
      user_id: 1,
      ToolTag: [
        {
          id: 4,
          title: 'vue.js',
          slug: 'vue.js',
          createdAt: '2021-05-04T17:49:28.000Z',
          updatedAt: '2021-05-04T17:49:28.000Z',
          tools_tags: {
            createdAt: '2021-05-04T18:05:29.000Z',
            updatedAt: '2021-05-04T18:05:29.000Z',
            tag_id: 4,
            tool_id: 1,
          },
        },
      ],
    },
  },
}

module.exports = doc
