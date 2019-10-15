import React from 'react'

// const Inputs = () =>
// (
//     <div id="inputs">
//         <input id="a" width="50px" type="number"></input>
//         <input id="b" width="50px" type="number"></input>
//     </div>
//     <article id="array"></article>
// )

class Inputs extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {a: 0, b: 0, arr:[]};
        this.aChanged = this.aChanged.bind(this);
        this.bChanged = this.bChanged.bind(this);
        this.generateArray = this.generateArray.bind(this);
      }
    aChanged(e)
    {
        const a = e.target.value;
        console.log('Value changed a: ' + a);
        this.setState({a: a});
            
    }
    bChanged(e)
    {
        const b = e.target.value;
        console.log('Value changed b: ' + b);
        this.setState({b: b});
    }
    generateArray(e)
    {
        if(this.state.a <= 0 || this.state.a > this.state.b)
        {
            return;
        }
        this.setState({arr: new Array(this.state.b-this.state.a+1).fill(0).map((val,idx) => val = parseInt(this.state.a) + idx)});
    }
    render() {
        return (
            <div id="inputs">
                <input id="a" width="50px" type="number" onChange={this.aChanged}></input>
                <input id="b" width="50px" type="number" onChange={this.bChanged}></input>
                <br></br>
                <button id="process" onClick={this.generateArray}>Process</button>
                <br></br>
                <span>{this.state.arr.toString()}</span>
            </div>
        );
    }
}


export default Inputs