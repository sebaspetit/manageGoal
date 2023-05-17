import Encabezamiento from './Encabezado';
import Principal from './Principal';
import Pie from './Pie';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
    <> 
      <Encabezamiento></Encabezamiento>
      <Principal>
        <Outlet></Outlet>
      </Principal>
      <Pie></Pie>   
    </>
    );
}

export default Layout