class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.toggleVisiblity = this.toggleVisiblity.bind(this)
        this.state ={
            visibility:false
        }
    }

     toggleVisiblity(){
         this.setState((prevState)=>{
            return {visibility:!prevState.visibility}
         })
    }

    render() { 
       return (
        <div>
            <h1>Visibility toggler</h1>
            <button onClick={this.toggleVisiblity}>{this.state.visibility?'hide details':'show details'}</button>
             {this.state.visibility && 
               <div> <p>hello world</p> </div>
             }
        </div> 
       )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility =false
// const toggleVisiblity =()=>{
//     visibility= !visibility;

//     render()
// }

// const render =()=>{

//     const jsx =(
//         <div>
//             <h1>Visibility toggler</h1>
//             <button onClick={toggleVisiblity}>{visibility?'hide details':'show details'}</button>
//             {visibility && (
//                 <div>
//                     <p>hello world</p>
//                 </div>
//             )}
//         </div>
//     )

//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()