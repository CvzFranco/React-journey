let n = 0;
function numberFormat(n) {
   return n.toString().padStart(2,'0')
}

function render() {
    const items = [
        'tache 1', 
        'tache 2',
        'tache 3' ]
        const lis = items.map(item => <li>{item}</li>)
    const title =<div><h1 className="title" id="title">
        Bonjour les gens <span> {n}</span>
    </h1><ul>
            <li>{lis}</li>
        </ul></div>

        ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()

},1000)