import React, { useState, useEffect } from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api/index';
import coronaImage from './images/image.png';
import Spinner from './components/Spinner';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const fetchedData = await fetchData(country);
      setData(fetchedData);
      setLoading(false);
    };
    getData();
  }, [country]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      <img className={styles.image} src={coronaImage} alt="COVID-19 image" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
