import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'

function App() {
  return (
    <div className="App">
       <Navbar dark color="primary">
         <div className='container-fruit'>
           <NavbarBrand href="/" >Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
         </div>
       </Navbar>
    </div>
  );
}

export default App;
