import '../index.css'
import { pdfjs } from 'react-pdf';
import { Document } from 'react-pdf';

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
        <Document
        options={{
                cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
        }}
        file="http://s23.q4cdn.com/479936946/files/doc_downloads/test.pdf"      >
      </Document>
        </main>
        <div class="push"/>
        <Footer />
      </body>
    </div>
  );
}

export default apChemistry;