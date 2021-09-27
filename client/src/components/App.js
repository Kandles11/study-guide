import React from 'react';
import PWAPrompt from 'react-ios-pwa-prompt'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <PWAPrompt
        timesToShow={1}
        permanentlyHideOnDismiss={true}
        debug={false}
      />
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4365060926343383"
     crossorigin="anonymous"></script>
      </head>
      <body>
        <main>
          <h1>Welcome to Mason's Study Guide!</h1>
          <div class="gridParent">
            <div class="flexChild">
              <h2>History:</h2>
              <a href="/usHist1301">US History 1301 🇺🇸</a>
              <a href="/usHist1302">US History 1302 🇺🇸</a>
            </div>
            <div class="flexChild">
              <h2>Government:</h2>
              <a href="/usGov2305">US Government 2305 👩‍⚖️</a>
            </div>
            <div class="flexChild">
              <h2>Economics:</h2>
              <a href="/econ2301">Economics 2301 💵</a>
            </div>
          </div>
        </main>
        <Footer/>
      </body>
    </div>
  );
}

export default App;
