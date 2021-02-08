import react from 'react';
import '../index.css'
import { usGov2305Data } from './data/usGov2305Data.js'

import Table from './Table'



function usGov2305() {
  return (
    <div className="usGov2305">
      <body> 
        <h1>US Government-2305 👩‍⚖️</h1>
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
          <h3 id="Chapter1MI">Chapter 1 RE</h3>
          <Table json={usGov2305Data.mindtap['Chapter 1']} />
          <h3 id="Chapter2MI">Chapter 2 RE</h3>
          <Table json={usGov2305Data.mindtap['Chapter 2']} />
          <h3 id="Chapter6MI">Chapter 3 RE</h3>
          <Table json={usGov2305Data.mindtap['Chapter 3']} />
          <h3 id="Chapter7MI">Chapter 4 RE</h3>
          <Table json={usGov2305Data.mindtap['Chapter 4']} />
          
      </body>
    </div>
  );
}

export default usGov2305;
