import '../index.css'
import { pdfjs } from 'react-pdf';

import Header from './Header'
import Footer from './Footer'

function apChemistry() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    
  return (
    <div className="usGov2305">
      <body> 
        <main>
        <Header text="AP Chemistry 🧪" />
        <div class="flexParent">
        <div class="flexChild">
            <h2>PDF's:</h2>
            <a href="#Chapter1MI">PDF 1</a>
        </div>
        </div>
        <h2>PDF's</h2>
        <h3>well this is embarrassing 😬</h3>
        <p>mason hasn't finished this area of the website, so just turn around and go back pretty please. thanks 💕</p>
        </main>
        <div class="push"/>
        <Footer />
      </body>
    </div>
  );
}

export default apChemistry;