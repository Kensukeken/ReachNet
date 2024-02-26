import React from 'react';

const App = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li><a href="#home">Home</a></li> 
          <li><a href="#language">Languages</a></li> 
          <li><a href="#P">Projects</a></li>
          <li><a href="#S">Social</a></li> 
        </ul>
      </div>

      <h1 id="home">Home</h1> 
      <img src="/icon.gif" alt="Icon" />

      <p>
        My fervor for Tex is boundless, and I take great pleasure in offering my expertise to those who seek it. Although I'm a novice in C#, CSS, C++, HTML and JS, my determination to master these languages fuels my ambition to craft exceptional applications. Currently, I'm navigating the intricacies of Java in my academic pursuits, a language that presents its challenges and proves to be quite demanding. Despite the stress it brings, I am steadfast in my commitment to conquering Java and expanding my proficiency in programming. Join me on this dynamic journey, where passion, determination, and continuous learning converge to shape the landscape of innovative applications.
      </p>

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
