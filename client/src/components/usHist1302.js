import '../index.css';
import {Helmet} from "react-helmet";
import { usHist1302Data } from '../data/usHist1302Data.js'

import Section from './Section'
import Header from './Header'
import Footer from './Footer'

function usHist1302() {
  return (
    <div className="TestPage">
      <Helmet>
        <title>US Hist-1302</title>
      </Helmet>
      <body>
        <main>
        <Header text="US History 1301 🇺🇸" />
        <div class="flexParent">
        <div class="flexChild">
            <h2>Voiceovers:</h2>
            <a href="#Chapter32VO">Chapter 32</a>
            <a href="#Chapter17VO">Chapter 17</a>
            <a href="#Chapter18VO">Chapter 18</a>
            <a href="#Chapter19VO">Chapter 19</a>
            <a href="#Chapter20VO">Chapter 20</a>
            <a href="#Chapter21VO">Chapter 21</a>
            <a href="#Chapter22VO">Chapter 22</a>
            <a href="#Chapter23VO">Chapter 23</a>

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
          <Section jsonProp={usHist1302Data.voiceovers['Chapter 32']} idProp="Chapter32VO" titleProp="Chapter 32 VO"></Section>
          <Section jsonProp={usHist1302Data.voiceovers['Chapter 17']} idProp="Chapter17VO" titleProp="Chapter 17 VO"></Section>
          <Section jsonProp={usHist1302Data.voiceovers['Chapter 18']} idProp="Chapter18VO" titleProp="Chapter 18 VO"></Section>
          <Section jsonProp={usHist1302Data.voiceovers['Chapter 19']} idProp="Chapter19VO" titleProp="Chapter 19 VO"></Section>
          <Section jsonProp={usHist1302Data.voiceovers['Chapter 20']} idProp="Chapter20VO" titleProp="Chapter 20 VO"></Section>
          <Section jsonProp={usHist1302Data.voiceovers['Chapter 21']} idProp="Chapter21VO" titleProp="Chapter 21 VO"></Section>
          <Section jsonProp={usHist1302Data.voiceovers['Chapter 22']} idProp="Chapter22VO" titleProp="Chapter 22 VO"></Section>
          <Section jsonProp={usHist1302Data.voiceovers['Chapter 23']} idProp="Chapter23VO" titleProp="Chapter 23 VO"></Section>
        <h2>Revel</h2>
          <Section jsonProp={usHist1302Data.revel['Chapter 32']} idProp="Chapter32RE" titleProp="Chapter 32 RE"></Section>
          <Section jsonProp={usHist1302Data.revel['Chapter 17']} idProp="Chapter17RE" titleProp="Chapter 17 RE"></Section>
          <Section jsonProp={usHist1302Data.revel['Chapter 18']} idProp="Chapter18RE" titleProp="Chapter 18 RE"></Section>
          <Section jsonProp={usHist1302Data.revel['Chapter 19']} idProp="Chapter19RE" titleProp="Chapter 19 RE"></Section>
          <Section jsonProp={usHist1302Data.revel['Chapter 20']} idProp="Chapter20RE" titleProp="Chapter 20 RE"></Section>
          <Section jsonProp={usHist1302Data.revel['Chapter 21']} idProp="Chapter21RE" titleProp="Chapter 21 RE"></Section>
        </main>
        <div class="push"/>
        <Footer/>
      </body>
    </div>
  );
}

export default usHist1302;
