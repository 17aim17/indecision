class Indecision extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions =this.handleDeleteOptions.bind(this)
        this.handlePick =this.handlePick.bind(this)
        this.handleAddOption =this.handleAddOption.bind(this)
        this.handleDeleteOption =this.handleDeleteOption.bind(this)
         // make options as state
        this.state ={
            options:[]
        };
    }

    // lifecycle method only in class base component
    componentDidMount() {
        try{
            const json =localStorage.getItem('options')
            const options =JSON.parse(json)
            if(options){
                this.setState(()=>{
                    return{
                        options:options
                    }
                })
            }
        }catch(e){

        }
      
    }

    componentDidUpdate(prevProps , prevState) {
        if(prevState.options.length!==this.state.options.length) {
           const json = JSON.stringify(this.state.options)
           localStorage.setItem('options',json)   
        }
           
    }

    componentWillUnmont() {
        console.log('deleted');        
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
            {props.options.length===0 && <p>Please add an option to get started</p>}
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
        if(!error){
            e.target.elements.option.value= ''
        }
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

ReactDOM.render( <Indecision /> , document.getElementById('app'))