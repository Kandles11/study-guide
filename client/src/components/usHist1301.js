import '../index.css'
import { usHist1301Data } from '../data/usHist1301Data.js'

import Section from './Section'
import Header from './Header'
import Footer from './Footer'


function usHist1301() {
  return (
    <div className="usHist1301">
      <body> 
        <main>
        <Header text="US History 1301 🇺🇸" />
        <div class="flexParent">
        <div class="flexChild">
            <h2>Revel:</h2>
            <a href="#Chapter1RE">Chapter 1</a>
            <a href="#Chapter2RE">Chapter 2</a>
            <a href="#Chapter3RE">Chapter 3</a>
            <a href="#Chapter4RE">Chapter 4</a>
            <a href="#Chapter5RE">Chapter 5</a>
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
          <Section jsonProp={usHist1301Data.revel['Chapter 1']} idProp="Chapter1RE" titleProp="Chapter 1 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 2']} idProp="Chapter2RE" titleProp="Chapter 2 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 3']} idProp="Chapter3RE" titleProp="Chapter 3 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 4']} idProp="Chapter4RE" titleProp="Chapter 4 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 5']} idProp="Chapter5RE" titleProp="Chapter 5 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 6']} idProp="Chapter6RE" titleProp="Chapter 6 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 7']} idProp="Chapter7RE" titleProp="Chapter 7 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 8']} idProp="Chapter8RE" titleProp="Chapter 8 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 9']} idProp="Chapter9RE" titleProp="Chapter 9 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 10']} idProp="Chapter10RE" titleProp="Chapter 10 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 11']} idProp="Chapter11RE" titleProp="Chapter 11 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 12']} idProp="Chapter12RE" titleProp="Chapter 12 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 13']} idProp="Chapter13RE" titleProp="Chapter 13 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 14']} idProp="Chapter14RE" titleProp="Chapter 14 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 15']} idProp="Chapter15RE" titleProp="Chapter 15 RE"></Section>
          <Section jsonProp={usHist1301Data.revel['Chapter 16']} idProp="Chapter16RE" titleProp="Chapter 16 RE"></Section>
          </main>
          <Footer/>
      </body>
    </div>
  );
}

export default usHist1301;
