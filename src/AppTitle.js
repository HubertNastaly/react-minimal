import React from 'react'

const AppTitle = () => (
  <p>
    Bundle size: 128950 bytes, Load time of the bundle: 50 ms, Last commit SHA1: 30992b7ca32cb7e9d39a6b364cfb3eb4bea58631
    <script>{console.log(generateRandomArray(7))}</script>
  </p>  
)

export default AppTitle

const generateArray = (n) => Array.from(new Array(n), (val, idx) => idx + 1);
const generateRandomArray = (n) => Array.from(new Array(n), (val) => val = Math.round(Math.random() * (25 - 1)) + 1);

