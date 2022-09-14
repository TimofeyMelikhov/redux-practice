import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchRepos } from './redux/reposActions/reposActions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRepos())
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
