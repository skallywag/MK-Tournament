import React from 'react';
import './App.css';
import './reset.css'
import Header from './Header/Header.jsx';
import NewsCard from './NewsCard/NewsCard';
import Footer from './Footer/Footer.jsx';
import LeaderBoardsCard from './LeaderBoardsCard/LeaderBoardsCard.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <NewsCard/>
      <LeaderBoardsCard/>
      <Footer/>
    </div>
  );
}

export default App;
