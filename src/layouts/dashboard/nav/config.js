// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'producto',
    path: '/dashboard/products',
    icon: icon('ic_product'),
  },
  {
    title: 'sale',
    path: '/dashboard/sale',
    icon: icon('ic_cart'),
  },
 
  
  {
    title: 'inventory',
    path: '/dashboard/inventory',
    icon: icon('ic_inventory'),
  },

  {
    title: 'credit',
    path: '/dashboard/credit',
    icon: icon('ic_credit'),
  },


 

  
];

export default navConfig;
