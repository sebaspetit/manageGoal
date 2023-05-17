import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componentes/Layout';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import NoEncontrado from './componentes/NoEncontrado';
import Modal from './componentes/Modal';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Lista/>} />
        <Route path='/lista' element={<Lista/>}>
          <Route path="/lista/:id" element=
          {<Modal> 
            <Detalles/> 
          </Modal>}/>
        </Route>
        <Route path='/crear' element={<Detalles/>} />
      </Route>
      <Route path='*' element={<NoEncontrado/>}/>
    </Routes> 
  );
}

export default App;
