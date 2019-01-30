const app = {
    title: 'Desicion',
    subtitle: 'Let computer handles your life',
    option: []
}

const addOption = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.option.push(option)
        e.target.elements.option.value = ''
        render()
    }

    console.log('Form Submitted', option);

}

const removeAll = () => {
    app.option = []
    render()
}

const decision = () => {
    const index = Math.floor(Math.random() * app.option.length)
    const option = app.option[index]
    alert(option)
}


const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <h2>{app.subtitle}</h2>}
            <p>{app.option && app.option.length > 0 ? "Here are you option" : "No Options"}</p>
            <button disabled={app.option.length == 0} onClick={decision}>What should i do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.option.map((op) => <li key={op}>{op}</li>)
                }
            </ol>
            <form method="POST" onSubmit={addOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)

}

render()
