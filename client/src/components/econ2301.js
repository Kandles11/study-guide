import '../index.css'
import { econ2301Data } from '../data/econ2301Data.js'

import Table from './Table'
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
          {/* <h3 id="Module1CE">Module 1</h3>
          <Table json={usGov2305Data.mindtap['module1']} />
          <h3 id="Module2CE">Module 2</h3>
          <Table json={usGov2305Data.mindtap['module2']} /> */}
          <Section jsonProp={econ2301Data.cengage['module3']} idProp="Module3CE" titleProp="Module 3"></Section>
        </main>
        <Footer />
      </body>
    </div>
  );
}

export default econ2301;
