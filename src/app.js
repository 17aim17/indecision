class Indecision extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions =this.handleDeleteOptions.bind(this)
        this.handlePick =this.handlePick.bind(this)
        this.handleAddOption =this.handleAddOption.bind(this)
        this.handleDeleteOption =this.handleDeleteOption.bind(this)
         // make options as state
        this.state ={
            options:props.options
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

    handleDeleteOption(option) {
        this.setState((prevState)=>{
           return { 
               options:prevState.options.filter((op)=>op!==option) 
            }
        })     
    }

    handleAddOption(option) {
        if(!option) {
            return  'Enter valid value please'
        } else if(this.state.options.indexOf(option)>-1){
            return 'This Option already exists'
        }else{
            this.setState((prevState)=>{
                return{
                    options:prevState.options.concat(option)
                    // options:prevState.options.concat([option])
                }
            })      
        }
         
    }

    render(){
        const subtitle ="Let Computer control your life"
        return (
            <div>
                <Header  subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options 
                    options={this.state.options} 
                    handleDeleteOption={this.handleDeleteOption} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

Indecision.defaultProps = {
    options:[]
}

const Header =(props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps ={
    title :'Decision Maker'
}
// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button 
                     onClick={props.handlePick} 
                     disabled = {!props.hasOptions}>What should I do?
             </button>
        </div>
     );
}

// class Action extends React.Component {
//     render(){
//         return (
//            <div>
//                <button 
//                         onClick={this.props.handlePick} 
//                         disabled = {!this.props.hasOptions}>What should I do?
//                 </button>
//            </div>
//         );
//     }
// }

const Options = (props) =>{
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map(option=> (
                    <Option 
                        key={option}  
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ) )
            }
        </div>
    )
}

// class Options extends React.Component {
//     render () {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map(option=> <Option key={option}  optionText={option}/> )
//                 }
//             </div>
//         )
//     }
// }

// different options here 
const Option = (props) =>{
    return (
        <div>
                {props.optionText}
                <button 
                    onClick={(e)=>{
                        props.handleDeleteOption(props.optionText)
                    }}
                >Remove
                </button>
        </div>
    )
}

// class Option extends React.Component {
//     render () {
//         return (
//             <div>
//                 {
//                    <p>{this.props.optionText}</p> 
//                 }
//             </div>
//         )
//     }
// }


class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state ={
            error:undefined
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        const option =e.target.elements.option.value.trim()
        e.target.elements.option.value= ''

        // if function is explicitly return anything that will be errors
        const error = this.props.handleAddOption(option)
        this.setState(()=>{
            return{error}
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit} method="POST">
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name:{props.name}</p>
//             <p>Age:{props.age}</p>
//         </div>
//     )
// }

ReactDOM.render( <Indecision /> , document.getElementById('app'))