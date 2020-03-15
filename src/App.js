import React from 'react';
import './App.css';
import './reset.css'
import Header from './Header/Header.jsx';
import NewsCard from './NewsCard/NewsCard';
import Footer from './Footer/Footer.jsx';
import LeaderBoardsCard from './LeaderBoardsCard/LeaderBoardsCard'
import LatestMatches from './LatestMatches/LatestMatches';

function App() {
  return (
    <div className="App">
      <Header/>
      <NewsCard/>
      <LeaderBoardsCard/>
      <LatestMatches/>
      <Footer/>
    </div>
  );
}

export default App;
