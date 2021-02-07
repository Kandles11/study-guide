import react from 'react';
import '../index.css'
import { usHist1301Data } from './data/usHist1301Data.js'

import Table from './Table'



function usHist1301() {
  return (
    <div className="usHist1301">
      <body> 
        <h1>US History 1301 🇺🇸</h1>
        <div class="flexParent">
        <div class="flexChild">
            <h2>Revel:</h2>
            <a href="#Chapter1RE">Chapter 1</a>
            <a href="#Chapter2RE">Chapter 2</a>
            <a href="#Chapter6RE">Chapter 6</a>
            <a href="#Chapter7RE">Chapter 7</a>
            <a href="#Chapter8RE">Chapter 8</a>
            <a href="#Chapter9RE">Chapter 9</a>
            <a href="#Chapter10RE">Chapter 10</a>
            <a href="#Chapter11RE">Chapter 11</a>
            <a href="#Chapter12RE">Chapter 12</a>
            <a href="#Chapter13RE">Chapter 13</a>
            <a href="#Chapter14RE">Chapter 14</a>
            <a href="#Chapter15RE">Chapter 15</a>
            <a href="#Chapter16RE">Chapter 16</a>
        </div>
        </div>
        <h2>Revel</h2>
          <h3 id="Chapter1RE">Chapter 1 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 1']} />
          <h3 id="Chapter2RE">Chapter 2 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 2']} />
          <h3 id="Chapter6RE">Chapter 6 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 6']} />
          <h3 id="Chapter7RE">Chapter 7 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 7']} />
          <h3 id="Chapter8RE">Chapter 8 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 8']} />
          <h3 id="Chapter9RE">Chapter 9 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 9']} />
          <h3 id="Chapter10RE">Chapter 10 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 10']} />
          <h3 id="Chapter11RE">Chapter 11 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 11']} />
          <h3 id="Chapter12RE">Chapter 12 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 12']} />
          <h3 id="Chapter13RE">Chapter 13 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 13']} />
          <h3 id="Chapter14RE">Chapter 14 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 14']} />
          <h3 id="Chapter15RE">Chapter 15 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 15']} />
          <h3 id="Chapter16RE">Chapter 16 RE</h3>
          <Table json={usHist1301Data.revel['Chapter 16']} />
      </body>
    </div>
  );
}

export default usHist1301;
