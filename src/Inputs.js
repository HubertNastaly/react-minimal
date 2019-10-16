import React from 'react'
import { get } from 'https';

class Inputs extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {a: 0, b: 0, arr:[], sqrtArr: []};
        this.aChanged = this.aChanged.bind(this);
        this.bChanged = this.bChanged.bind(this);
        this.generateArray = this.generateArray.bind(this);
        this.processArray = this.processArray.bind(this);
        this.counter = 1;
      }
    aChanged(e)
    {
        this.setState({sqrtArr: []});
        const a = e.target.value;
        console.log('Value changed a: ' + a);
        this.setState({a: a});
        this.generateArray(a,parseInt(this.state.b));
    }
    bChanged(e)
    {
        this.setState({sqrtArr: []});
        const b = e.target.value;
        console.log('Value changed b: ' + b);
        this.setState({b: b});
        this.generateArray(parseInt(this.state.a),b);
    }
    generateArray(a,b)
    {
        if(a <= 0 || a > b)
        {
            console.time('Render ' + this.counter);
            this.setState({arr: []}, () => {
                console.timeEnd('Render ' + this.counter++);
            });
            return;
        }
        console.time('Render ' + this.counter);
        this.setState({arr: new Array(b-a+1).fill(0).map((val,idx) => val = a + idx)}, () => {
            console.timeEnd('Render ' + this.counter++);
        });
    }
    processArray()
    {
        if(this.state.arr.length == 0)
        {
            this.setState({sqrtArr: []});
            return;
        }
        if(this.state.sqrtArr.length == 0)
        {
            console.time('Render ' + this.counter);
            this.setState({sqrtArr: this.state.arr.map((val) => Math.sqrt(val))}, () => {
                console.timeEnd('Render ' + this.counter++);
            });
        }
        else
        {
            console.time('Render ' + this.counter);
            this.setState({sqrtArr: this.state.sqrtArr.map((val) => Math.sqrt(val))}, () => {
                console.timeEnd('Render ' + this.counter++);
            });
        }
    }
    render() {
        return (
            <div id="inputs">
                <input id="a" width="50px" type="number" onChange={this.aChanged}></input>
                <input id="b" width="50px" type="number" onChange={this.bChanged}></input>
                <br></br>
                <p>{this.state.arr.toString().split(',').join(', ')}</p>
                <button id="processArray" onClick={this.processArray}>Process array</button>
                <br></br>
                <p>{this.state.sqrtArr.toString().split(',').join('; ')}</p>
                {/* <p>{this.state.arr.map((val) => Math.sqrt(val)).toString().split(',').join('; ')}</p> */}
            </div>
        );
    }
}


export default Inputs