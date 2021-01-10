import react from 'react';
import '../index.css'
import { chapter1Data } from './data/data.js'



function TestPage() {
  return (
    <div className="TestPage">
      <body> 
        <h1>Test Page!</h1>
        <table>
          <tr><th>Question</th><th>Answer</th></tr>
          {chapter1Data.map(data => (
          <tr><td>{data.Question}</td><td>{data.Answer}</td></tr>
        ))}
        </table>
      </body>
    </div>
  );
}

export default TestPage;
