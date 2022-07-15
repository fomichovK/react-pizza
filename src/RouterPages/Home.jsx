import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { SerchContext } from '../App';

import Nav from '../components/Nav';
import Sort from '../components/Sort';
import PizzaCard from '../components/PizzaCard';
import PizzaSkeleton from '../components/PizzaCard/PizzaSkeleton';

import { setCategoryId } from '../redux/Slices/filterSlice';

const url = 'https://62b83a2b03c36cb9b7c3b52d.mockapi.io/pizas?';

// export const FilterContext = createContext();

const Home = () => {
  //redux

  const activIndex = useSelector((state) => state.filter.id);

  const sortType = useSelector((state) => state.filter.sortby.sort);
  const dispatch = useDispatch();

  const setActivIndex = (id) => {
    dispatch(setCategoryId(id));
  };

  //--------------------//

  const { searchValue } = useContext(SerchContext);

  const [list, setList] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  // const [activIndex, setActivIndex] = useState(0);
  // const [sortType, setSortType] = useState({ name: 'популярности', sort: 'rating:' });

  const sceleton = [...new Array(6)].map((_, i) => {
    return <PizzaSkeleton key={i} />;
  });

  const pizzas = list.map((item) => {
    return <PizzaCard key={item.id} {...item} />;
  });

  const categoey = activIndex;

  const sortBy = `sortBy=${sortType}&order=desc`;

  const search = searchValue ? `search=${searchValue}` : '';
  const categoeyFiltr = categoey !== 0 ? `category=${categoey}` : '';

  useEffect(() => {
    setIsLoading(true);
    // fetch(`${url}${categoeyFiltr}&${sortBy}&${search}`)
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setList(arr);
    //     setIsLoading(false);
    //   });
    axios.get(`${url}${categoeyFiltr}&${sortBy}&${search}`).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }, [categoeyFiltr, search, searchValue, sortBy, sortType]);

  return (
    <>
      <div className='filter'>
        <Nav activIndex={activIndex} setActivIndex={setActivIndex} />
        <Sort />
      </div>
      <h3>ВСЕ ПИЦЫ</h3>
      <div className='pizzaList'>{isloading ? sceleton : pizzas}</div>
    </>
  );
};

export default Home;
