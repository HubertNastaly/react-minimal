import React from 'react'

const AppTitle = () => (
  <p>
    Bundle size: 128950 bytes, Load time of the bundle: 50 ms, Last commit SHA1: 30992b7ca32cb7e9d39a6b364cfb3eb4bea58631
    <script>{console.log(sqrtArray())}</script>
  </p>  
)

export default AppTitle

const generateArray = (n) => Array.from(new Array(n), (val, idx) => idx + 1);
const generateRandomArray = (n) => Array.from(new Array(n), (val) => val = Math.round(Math.random() * (25 - 1)) + 1);
const constArray = [2, 56, 23, 88, 17, 4];
const largerThan15 = () => constArray.filter((val) => val > 15);
const constArray2 = [2, 5, 8, 10];
const sqrtArray = () => Array.from(constArray2.map((val) => Math.sqrt(val)));

