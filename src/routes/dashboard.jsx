// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import LocationOn from '@material-ui/icons/LocationOn';
import Settings from '@material-ui/icons/Settings';

// core components/views
import DashboardPage from 'views/Dashboard/Dashboard.jsx';
import UserProfile from 'views/UserProfile/UserProfile.jsx';
import Maps from 'views/Maps/Maps.jsx';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Samaritan Dashboard',
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: '/maps',
    sidebarName: 'Map',
    navbarName: 'Map',
    icon: LocationOn,
    component: Maps
  },
  {
    path: '/user',
    sidebarName: 'Settings',
    navbarName: 'Settings',
    icon: Settings,
    component: UserProfile
  },

  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' }
];

export default dashboardRoutes;
