import React from 'react'
import { get } from 'https';

class Inputs extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {a: 0, b: 0, arr:[]};
        this.aChanged = this.aChanged.bind(this);
        this.bChanged = this.bChanged.bind(this);
        this.generateArray = this.generateArray.bind(this);
        this.counter = 1;
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
            console.time('Render ' + this.counter);
            this.setState({arr: []}, () => {
                console.timeEnd('Render ' + this.counter++);
            });
            return;
        }
        console.time('Render ' + this.counter);
        this.setState({arr: new Array(this.state.b-this.state.a+1).fill(0).map((val,idx) => val = parseInt(this.state.a) + idx)}, () => {
            console.timeEnd('Render ' + this.counter++);
        });
    }
    render() {
        return (
            <div id="inputs">
                <input id="a" width="50px" type="number" onChange={this.aChanged}></input>
                <input id="b" width="50px" type="number" onChange={this.bChanged}></input>
                <br></br>
                <button id="process" onClick={this.generateArray}>Process</button>
                <br></br>
                <p>{this.state.arr.toString().split(',').join(', ')}</p>
            </div>
        );
    }
}


export default Inputs