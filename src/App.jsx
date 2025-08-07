import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom'
import Collection from './pages/collection/Collection';
import Navbar from './componenets/nav/Navbar';
import Admin from './pages/admin/Admin';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App
