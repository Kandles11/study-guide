import Table from './Table.js'

function Section(props) {
    return <div>
        <div class="flexParent">
            <h3 class="sectionHeader" id={props.idProp}>{props.titleProp}</h3>
            <a class="smallButton" href="#top">🔝</a>
        </div>
        <Table json={props.jsonProp} />
    </div>
}

export default Section;