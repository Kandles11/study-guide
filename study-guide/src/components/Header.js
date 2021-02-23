import Back from './Back.js'

function Header(props) {
    return <div class="flexParent">
        <div class="headerFiller"><Back/></div>
        <h1>{props.text}</h1>
        <div class="headerFiller"></div>
    </div>
}

export default Header;