import React from 'react'
import { get } from 'https';

class Inputs extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {a: 0, b: 0, arr:[]};
        this.sqrtArr = [];
        this.aChanged = this.aChanged.bind(this);
        this.bChanged = this.bChanged.bind(this);
        this.generateArray = this.generateArray.bind(this);
        this.processArray = this.processArray.bind(this);
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
        const [a,b] = [parseInt(this.state.a),parseInt(this.state.b)];
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
            return;
        }
        if(this.sqrtArr.length == 0)
        {
            console.log('sqrtArr does not exist');
            this.sqrtArr = new Array(this.state.arr.length + this.state.arr[0]).fill(0).map((val,idx) => val = Math.sqrt(idx));
        }
        else
        {
            console.log('sqrtArr exists');
            if(this.state.arr.length + this.state.arr[0] > this.sqrtArr.length)
            {
                const extraLen = this.state.arr.length + this.state.arr[0] - this.sqrtArr.length;
                const len = this.sqrtArr.length;
                console.log(`sqrtArr is too short, extraLen: ${extraLen}`);
                this.sqrtArr = this.sqrtArr.concat(new Array(extraLen).fill(0).map((val,idx) => val = Math.sqrt(len + idx)));
            }
        }
        const [a,b] = [parseInt(this.state.a),parseInt(this.state.b)];
        console.log(this.sqrtArr);
        console.log(this.sqrtArr.slice(a,b+1));
        console.log([a,b]);
        console.time('Process array');
        this.setState({arr: this.sqrtArr.slice(a,b+1)}, () => {
            console.timeEnd('Process array');
        });
        // console.time('Process array');
        // this.setState({arr: this.state.arr.map((val) => Math.sqrt(val))}, () => {
        //     console.timeEnd('Process array');
        // });
        
    }
    render() {
        return (
            <div id="inputs">
                <input id="a" width="50px" type="number" onChange={this.aChanged}></input>
                <input id="b" width="50px" type="number" onChange={this.bChanged}></input>
                <br></br>
                <button id="process" onClick={this.generateArray}>Process</button>
                <br></br>
                <button id="processArray" onClick={this.processArray}>Process array</button>
                <br></br>
                <p>{this.state.arr.toString().split(',').join(', ')}</p>
                
            </div>
        );
    }
}


export default Inputs