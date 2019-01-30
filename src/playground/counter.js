class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.addOne =this.addOne.bind(this)
        this.minusOne =this.minusOne.bind(this)
        this.reset =this.reset.bind(this)

        // setup default state value
        this.state ={
            count:0,
            name:'Ashish'
        }
    }

    addOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }

    minusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        })
    }

    reset() {
        this.setState((prevState)=>{
            return {
                count:0
            }
        })

        // this.setState((prevState)=>{
        //     return {
        //         count:prevState.count+1
        //     }
        // })

        // // Alternative for setState
        // this.setState({
        //     count:0
        // })
        // this.setState({
        //     count:this.state.count+1
        // })
    }

    render() {
        return  (
            <div>
                <h1>Count :{this.state.count}</h1>
                <button onClick={this.addOne}>+ 1 </button>
                <button onClick={this.minusOne}>- 1 </button>
                <button onClick={this.reset}> Reset </button>
            </div>
        );
    }
}

ReactDOM.render(<Counter/> , document.getElementById('app'))
// let count =0
// const addOne= () =>{
//     console.log('Added One')    
//     count++;
//     render()
// }
// const minusOne= () =>{
//     console.log('Subtracted One')
//     count--;
//     render()
// }
// const reset= () =>{
//     console.log('Reset')
//     count =0;
//     render()
// }


// const render = ()=>{
//     const template2 = (
//         <div>
//             <h1>Count : {count}</h1>    
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(template2 ,appRoot)
// }

// render()