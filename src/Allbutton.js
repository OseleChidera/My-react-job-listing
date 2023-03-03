
// import React from './react'
export default function Allbutton({showAll}) {
  


    return (
    <div className="allbutton-right">
       <button className="all" onClick={showAll}>All</button>
    </div>
    );
};
















































// return 
//     <div className="right">
//     <ul className="services">

//     <input type="checkbox"  id={`role-${pID}`} name={`role-${pID}`}/> 
//     <label htmlFor={`role-${pID}`}>
//         <li className="normal">{eachItem.role}</li>
//     </label>

//     <input type="checkbox"  name={`level-${pID}`} id={`level-${pID}`} />
//     <label htmlFor={`level-${pID}`}>
//         <li className="normal">{eachItem.level}</li>
//     </label>
//     {eachItem.languages.map((eachLang , languageIndex)=>{
//         return (
//             <>
//             <input type="checkbox" name={`lang-${languageIndex}${eachItem.id}`} id={`lang-${languageIndex}${eachItem.id}`} />
//             <label htmlFor={`lang-${languageIndex}${eachItem.id}`}><li className="red">{eachLang}</li></label>
//             </>
//         );
//     })}
//     {eachItem.tools.map((eachTool , toolIndex )=>{
//         return(
//             <><input type="checkbox" nam={`tool-${toolIndex}${eachItem.id}`} id={`tool-${toolIndex}${eachItem.id}`} />
//             <label htmlFor={`tool-${toolIndex}${eachItem.id}`}><li className="blue">{eachTool}</li></label></>
//         );
//     })}
//     </ul>
// </div>
// );