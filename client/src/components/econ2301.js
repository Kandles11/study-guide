import '../index.css'
import { econ2301Data } from '../data/econ2301Data.js'

import Section from './Section'
import Header from './Header'
import Footer from './Footer'


function econ2301() {
  return (
    <div className="econ2301">
      <body> 
        <main>
        <Header text="Economics-2301 💵" />
        <div class="flexParent">
        <div class="flexChild">
            <h2>Cengage:</h2>
            <a href="#Module1CE">Module 1</a>
            <a href="#Module2CE">Module 2</a>
            <a href="#Module3CE">Module 3</a>
        </div>
        </div>
        <h2>Cengage</h2>
            <Section jsonProp={econ2301Data.cengage['module1']} idProp="Module1CE" titleProp="Module 1"></Section>
            <Section jsonProp={econ2301Data.cengage['module2']} idProp="Module2CE" titleProp="Module 2"></Section>
            <Section jsonProp={econ2301Data.cengage['module3']} idProp="Module3CE" titleProp="Module 3"></Section>
        </main>
        <Footer />
      </body>
    </div>
  );
}

export default econ2301;
