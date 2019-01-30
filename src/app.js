// const obj = {
//     name:'Ashish',
//     getName(){
//         return this.name
//     }
// }

// const getName = obj.getName.bind({name:'Hello World'})

// console.log(getName())

class Indecision extends React.Component {
    // make options as state
    constructor(props) {
        super(props)
        this.handleDeleteOptions =this.handleDeleteOptions.bind(this)
        this.handlePick =this.handlePick.bind(this)
        this.state ={
            options:['Thing One','Thing Two','Thing three']
        };
    }

    handlePick() {
        const index = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[index]
        alert(option)
    }

    handleDeleteOptions() {
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }

    render(){
        const title = "Decision Maker"
        const subtitle ="Let Computer control your life"
       
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    
    render(){
        return (
           <div>
               <button 
                        onClick={this.props.handlePick} 
                        disabled = {!this.props.hasOptions}>What should I do?
                </button>
           </div>
        );
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map(option=> <Option key={option}  optionText={option}/> )
                }
            </div>
        )
    }
}

// different options here 
class Option extends React.Component {
    render () {
        return (
            <div>
                {
                   <p>{this.props.optionText}</p> 
                }
            </div>
        )
    }
}

class AddOption extends React.Component {
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method="POST">
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render( <Indecision /> , document.getElementById('app'))