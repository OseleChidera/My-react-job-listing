import React from 'react'
import Navbar from './Navbar';
import Main from './Main';
import List from './list';
import Allbutton from './Allbutton';
import Data from './data.json'
import { useState } from 'react';
import {motion} from 'framer-motion'




export default function App() {
const [json , setJson] = useState(Data)
const [json2 , setJson2] = useState(Data)
const [query , setQuerys] = useState("true")



function filter(e){
  setQuerys(e.target.value)
  setJson2(json.filter(item=> item.tools.includes(e.target.value) || item.languages.includes(e.target.value)))

}
function showAll(){
  console.log('heyyyyyyyyyy');
  setJson2(Data)
}
  return (
    <>
     <Navbar/>
      <Main 
      filter={filter}
      info={json2}
      setJson2={setJson2}
      query={query}
      setQuery={setQuerys}
      showAll={showAll}
      >
      <Allbutton/>
      <List/>
      </Main>
    </>
  )
}