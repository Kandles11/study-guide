import react from 'react';
import '../index.css'
import { usHist1302Data } from './data/usHist1302Data.js'

import Table from './Table'



function usHist1302() {
  return (
    <div className="TestPage">
      <body> 
        <h1>US History 1302!</h1>
        <div class="flexParent">
        <div class="flexChild">
            <h2>Voiceovers:</h2>
            <a href="#Chapter32VO">Chapter 32</a>
            <a href="#Chapter17VO">Chapter 17</a>
        </div>
        <div class="flexChild">
            <h2>Revel Answers:</h2>
            <a href="#Chapter32RE">Chapter 32</a>
        </div>
        </div>
        <h2>Voice-Overs</h2>
          <h3 id="Chapter32VO">Chapter 32 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 32']} />
          <h3 id="Chapter17VO">Chapter 17 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 17']} />
        <h2>Revel</h2>
          <h3>Chapter 32 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 32']} />
          <h3>Chapter 18 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 18']} />
          <h3>Chapter 19 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 19']} />
          <h3>Chapter 20 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 20']} />
      </body>
    </div>
  );
}

export default usHist1302;
