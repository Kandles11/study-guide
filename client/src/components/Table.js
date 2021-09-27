function Table(props) {
    return <table>
    <tr><th>Question</th><th>Answer</th></tr>
    {props.json.map(data => (
    <tr><td>{data.Question}</td><td>{data.Answer}</td></tr>
  ))}
  </table>
}

export default Table;