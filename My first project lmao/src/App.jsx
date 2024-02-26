import React from 'react';
import { Navbar} from './Components/navbar';
import { Home } from './Components/home';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <h1 id = "L">Langues </h1>
      <div className="lang">
        
      </div>
      <div>
        <h1 id="S">Social</h1>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        <div className="social-buttons-container">
          <ul>
            <li><a href="https://www.youtube.com/channel/UCBvJDLAaRQ80NCJIASY51bg" className="fa fa-youtube"></a></li>
            <li><a href="https://twitter.com/Kensukeken_" className="fa fa-twitter"></a></li>
            <li><a href="https://github.com/Kensukeken" className="fa fa-github"></a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
