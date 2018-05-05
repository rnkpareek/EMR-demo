export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
   {
    name: 'Registration',
    url: '/registration',
    icon: 'icon-user',
    children: [
      {
        name: 'Full Registration',
        url: '/registration/fullregistration',
        icon: 'icon-user'
      },
      {
        name: 'Quick Registration',
        url: '/registration/quickregistration',
        icon: 'icon-user'
      },
    ]
  },

   {
    name: 'Out Patient',
    url: '/registration',
    icon: 'icon-user'

  },
   {
    name: 'OPD Billing',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Reporting',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Indoor Patient',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Indoor Billing',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Store',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Pharmacy',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Financial Accounting',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Payroll',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Canteen',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'MRD Management',
    url: '/registration',
    icon: 'icon-user',

  },
   {
    name: 'Diagnostic Reporting',
    url: '/registration',
    icon: 'icon-user',

  },
  {
    name: 'MIS Reports',
    url: '/registration',
    icon: 'icon-user',

  },
  {
    name: 'Online MIS',
    url: '/registration',
    icon: 'icon-user',

  },
  {
    name: 'Invoice System',
    url: '/registration',
    icon: 'icon-user',

  },

   {
    name: 'Lab test system',
    url: '/registration',
    icon: 'icon-user',

  },
  {
    name: 'Dr services report',
    url: '/registration',
    icon: 'icon-user',

  },
{
    name: 'Application management',
    url: '/registration',
    icon: 'icon-user',

  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger'
  }
];
