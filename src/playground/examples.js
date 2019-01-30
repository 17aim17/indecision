const obj = {
    name:'Ashish',
    getName(){
        return this.name
    }
}

const getName = obj.getName.bind({name:'Hello World'})

console.log(getName())