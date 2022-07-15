import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './RouterPages/Home';
import Cart from './RouterPages/Cart';
import NotFound from './RouterPages/NotFound';
import { createContext, useState } from 'react';

export const SerchContext = createContext();

function App() {
  const [searchValue, setSeachValue] = useState();

  return (
    <div className='wrapper'>
      <SerchContext.Provider value={{ searchValue, setSeachValue }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SerchContext.Provider>
    </div>
  );
}

export default App;
