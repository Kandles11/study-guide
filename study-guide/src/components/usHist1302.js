import react from 'react';
import '../index.css';
import {Helmet} from "react-helmet";
import { usHist1302Data } from './data/usHist1302Data.js'


import Table from './Table'



function usHist1302() {
  return (
    <div className="TestPage">
      <Helmet>
        <title>US Hist-1302</title>
      </Helmet>
      <body> 
        <h1>US History 1302 🇺🇸</h1>
        <a href="../" class="backButton">Back..</a>
        <div class="flexParent">
        <div class="flexChild">
            <h2>Voiceovers:</h2>
            <a href="#Chapter32VO">Chapter 32</a>
            <a href="#Chapter17VO">Chapter 17</a>
            <a href="#Chapter18VO">Chapter 18</a>
            <a href="#Chapter19VO">Chapter 19</a>
            <a href="#Chapter20VO">Chapter 20</a>
            <a href="#Chapter21VO">Chapter 21</a>

        </div>
        <div class="flexChild">
            <h2>Revel:</h2>
            <a href="#Chapter32RE">Chapter 32</a>
            <a href="#Chapter17RE">Chapter 17</a>
            <a href="#Chapter18RE">Chapter 18</a>
            <a href="#Chapter19RE">Chapter 19</a>
            <a href="#Chapter20RE">Chapter 20</a>
            <a href="#Chapter21RE">Chapter 21</a>
        </div>
        </div>
        <h2>Voice-Overs</h2>
          <h3 id="Chapter32VO">Chapter 32 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 32']} />
          <h3 id="Chapter17VO">Chapter 17 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 17']} />
          <h3 id="Chapter18VO">Chapter 18 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 18']} />
          <h3 id="Chapter19VO">Chapter 19 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 19']} />
          <h3 id="Chapter20VO">Chapter 20 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 20']} />
          <h3 id="Chapter21VO">Chapter 21 VO</h3>
          <Table json={usHist1302Data.voiceovers['Chapter 21']} />
        <h2>Revel</h2>
          <h3 id="Chapter32RE">Chapter 32 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 32']} />
          <h3 id="Chapter17RE">Chapter 17 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 17']} />
          <h3 id="Chapter18RE">Chapter 18 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 18']} />
          <h3 id="Chapter19RE">Chapter 19 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 19']} />
          <h3 id="Chapter20RE">Chapter 20 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 20']} />
          <h3 id="Chapter21RE">Chapter 21 RE</h3>
          <Table json={usHist1302Data.revel['Chapter 21']} />
      </body>
    </div>
  );
}

export default usHist1302;
