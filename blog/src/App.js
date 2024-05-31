import React from 'react';
import './App.css';
import image1 from './bloggima/electric.jpeg'
import image2 from './bloggima/sportscar.jpeg'

function App() {
  return (
    <div className="App">
      <header className="top-bar">
        <div className="logo">All About Cars</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main className="blog-posts">
        <article className="post">
          <h2 className="post-title">The Evolution of Electric Cars</h2>
          <p className="post-meta">Published on: 2024-05-24 by Jane Doe</p>
          <img src={image1} alt="Descriptive Image 1" className="post-image" />
          <p className="post-body">
            Electric cars have come a long way since their inception. From the early models that had limited range and power to the latest high-performance vehicles, the evolution has been remarkable. Today, electric cars are known for their efficiency, environmental benefits, and advanced technology. In this post, we'll take a journey through the history of electric cars and see how they have transformed the automotive industry.
          </p>
          <hr />
        </article>
        <article className="post">
          <h2 className="post-title">Top 5 Sports Cars of 2024</h2>
          <p className="post-meta">Published on: 2024-05-23 by John Smith</p>
          <img src={image2} alt="Descriptive Image 2" className="post-image" />
          <p className="post-body">
            2024 has been an exciting year for sports car enthusiasts. With advancements in technology and design, manufacturers have introduced some truly stunning models. From the sleek Ferrari F8 Tributo to the powerful Porsche 911 Turbo S, this year's lineup offers something for every car lover. Join us as we count down the top 5 sports cars of 2024 and explore what makes each of them special.
          </p>
          <hr />
        </article>
      </main>
    </div>
  );
}

export default App;
