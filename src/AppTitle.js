import React from 'react'
import {Component} from 'react'
import { render } from 'react-dom'

function StudentsList(props)
{
  switch(props.name)
  {
    case 'AllStudents':
    {
      return data.map((group) => group.students.map((student) => <li>{student.name}</li>));
    }
    case 'SortStudents':
    {
      return (data.map((group) => group.students.map((student) => student.name))).flat().sort().map((name) => <li>{name}</li>);
    }
    case 'OldStudents':
    {
      return data.filter((group) => group.active).map((group) => group.students).flat().filter((student) => student.age > 20).map((student) => <li>{student.name}</li>);
    }
  }
}

const AppTitle = () =>
(
  <main>
    <button id="AllStudents" onClick={() => render(<StudentsList name="AllStudents"/>, document.getElementsByTagName('ul').item(0))}>All students</button>
    <button id="SortStudents" onClick={() => render(<StudentsList name="SortStudents"/>, document.getElementsByTagName('ul').item(0))}>Sort students</button>
    <button id="OldStudents" onClick={() => render(<StudentsList name="OldStudents"/>, document.getElementsByTagName('ul').item(0))}>Old students</button>
    <ul></ul>
  </main>
)

export default AppTitle

const generateArray = (n) => Array.from(new Array(n), (val, idx) => idx + 1);
const generateRandomArray = (n) => Array.from(new Array(n), (val) => val = Math.round(Math.random() * (25 - 1)) + 1);
const constArray = [2, 56, 23, 88, 17, 4];
const largerThan15 = () => constArray.filter((val) => val > 15);
const constArray2 = [2, 5, 8, 10];
const sqrtArray = () => Array.from(constArray2.map((val) => Math.sqrt(val)));

const data = 
[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta Poznanska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]



