import react from 'react';
import '../index.css'
import { usHist1302Data } from './data/usHist1302Data.js'



function usHist1302() {
  return (
    <div className="TestPage">
      <body> 
        <h1>US History 1302!</h1>
        <h2>Voice-Overs</h2>
        <table>
          <tr><th>Question</th><th>Answer</th></tr>
          {usHist1302Data.voiceovers.map(data => (
          <tr><td>{data.Question}</td><td>{data.Answer}</td></tr>
        ))}
        </table>
        <h2>Revel</h2>
        <table>
          <tr><th>Question</th><th>Answer</th></tr>
          {usHist1302Data.revel.map(data => (
          <tr><td>{data.Question}</td><td>{data.Answer}</td></tr>
        ))}
        </table>
      </body>
    </div>
  );
}

export default usHist1302;
