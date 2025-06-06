import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateHome } from "../features/Tab/TabInfo";

const Home = () => {
  const dispatch = useDispatch();

  const homeData = useSelector(state => state.entry.home)

  const handleChange = (event) => {
    dispatch(updateHome(event.target.value))
  }

  return (
    <div>
      <h2>Home</h2>
      <input type="text" placeholder="Enter Home Input" value={homeData} onChange={handleChange} />
    </div>
  );
};

export default Home;
