import estilos from './Principal.module.css'
import Vinculo from './Vinculo';
import { ReactComponent as ListaSVG } from '../img/lista.svg'
import { ReactComponent as NuevaSVG } from '../img/nueva.svg'
function Principal({ children }) {
    return (
      <div className={estilos.principal}>
        <aside className= {estilos.aside}>
          <Vinculo 
            to="/lista"
            texto="Goal List"
            Icono = {ListaSVG}/>
          
          <Vinculo 
            to="/crear" 
            texto="New Goal"
            Icono = {NuevaSVG}/>
        </aside>
        <main className={estilos.main}>
            {children}
        </main>
      </div>
    );
  }
  
  export default Principal;