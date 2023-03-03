
import './App.css';
import List from "./list"
import Allbutton from './Allbutton';
function Main({filter ,info ,setJson2 ,query ,setQuerys , showAll}) {

// console.log(query);
  return (
  <>
  <div className='main'>
    <Allbutton showAll={showAll}/>
  <List 
  filter={filter}
  info={info}
  setJson2={setJson2}
  query={query}
  setQuery={setQuerys}
  />
  </div>
  </>
  );
}

export default Main;

