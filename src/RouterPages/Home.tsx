import React, { useContext, useEffect, useState } from 'react';
// import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { SerchContext } from '../App';

import Nav from '../components/Nav';
import Sort from '../components/Sort';
import PizzaCard from '../components/PizzaCard';
import PizzaSkeleton from '../components/PizzaCard/PizzaSkeleton';

import { setCategoryId } from '../redux/Slices/filterSlice';
import { RootState } from '../redux/store';
// import { useNavigate } from 'react-router-dom';

const url = 'https://62b83a2b03c36cb9b7c3b52d.mockapi.io/pizas?';

const Home: React.FC = () => {
  const activIndex = useSelector((state: RootState) => state.filter.id); //redux

  const sortType = useSelector((state: RootState) => state.filter.sortBy.sort); //redux
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const setActivIndex = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const { searchValue } = useContext(SerchContext);

  const [list, setList] = useState<[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);

  const sceleton = [...new Array(6)].map((_, i) => {
    return <PizzaSkeleton key={i} />;
  });

  const pizzas = list.map((item: any) => {
    return <PizzaCard key={item.id} {...item} />;
  });

  const categoey = activIndex;

  useEffect(() => {
    setIsLoading(true);

    const sortBy = `sortBy=${sortType}&order=desc`;
    const search = searchValue ? `search=${searchValue}` : '';
    const categoryFiltr = categoey !== 0 ? `category=${categoey}` : '';

    axios.get(`${url}${categoryFiltr}&${sortBy}&${search}`).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }, [categoey, searchValue, sortType]);

  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     categoey,
  //     sortBy: `${sortType}`,
  //   });
  //   navigate(`?${queryString}`);
  // }, [categoey, navigate, searchValue, sortType]);

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
