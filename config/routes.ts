export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'Principal',
                icon: 'user',
                path: '/principal',
                routes: [
                  {
                    name: 'Principal',
                    icon: 'user',
                    path: '/principal/principal-list',
                    component: './Principal/PrincipalList',
                  },
                  {
                    name: 'Subprincipal',
                    icon: 'user',
                    path: '/principal/subprincipal-list',
                    component: './Principal/SubprincipalList',
                  },
                  {
                    name: 'Info',
                    icon: 'user',
                    path: '/principal/info',
                    component: './Principal/Info',
                  },
                ],
              },
              {
                name: 'Policy',
                icon: 'lock',
                path: '/policy',
                component: './Policy',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
