import '../index.css'
import { usGov2305Data } from '../data/usGov2305Data.js'

import Table from './Table'
import Header from './Header'
import Footer from './Footer'



function usGov2305() {
  return (
    <div className="usGov2305">
      <body> 
        <main>
        <Header text="Government-2305 👩‍⚖️" />
        <div class="flexParent">
        <div class="flexChild">
            <h2>Mindtap:</h2>
            <a href="#Chapter1MI">Chapter 1</a>
            <a href="#Chapter2MI">Chapter 2</a>
            <a href="#Chapter3MI">Chapter 3</a>
            <a href="#Chapter4MI">Chapter 4</a>
        </div>
        </div>
        <h2>Mindtap</h2>
          <h3 id="Chapter1MI">Chapter 1 MI</h3>
          <Table json={usGov2305Data.mindtap['Chapter 1']} />
          <h3 id="Chapter2MI">Chapter 2 MI</h3>
          <Table json={usGov2305Data.mindtap['Chapter 2']} />
          <h3 id="Chapter3MI">Chapter 3 MI</h3>
          <Table json={usGov2305Data.mindtap['Chapter 3']} />
          <h3 id="Chapter4MI">Chapter 4 MI</h3>
          <Table json={usGov2305Data.mindtap['Chapter 4']} />
        </main>
        <div class="push"/>
        <Footer />
      </body>
    </div>
  );
}

export default usGov2305;
