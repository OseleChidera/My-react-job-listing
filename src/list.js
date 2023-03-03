import  React from "react"
import {motion , AnimatePresence} from 'framer-motion'




export default function List({filter ,info ,query   }) {

    
    return (
        <motion.div layout
        className="overflow-scroll">

       {info.map((eachListItem , index)=>{
            return (
                <motion.div
                animate={{opacity : 1}}
                initial={{opacity:0}}
                exit={{opacity:0}}
                layout
                // hidden={{ y: 20, opacity: 0 }}
                // visible={{ y: 0, opacity: 1}}
                
                className={`item  item-${eachListItem.id}`} key={index}>
                <div className="left">


{/* ============================================================================================ */}
                <div className="company-logo">
                    <img src={`./images/${eachListItem.logo}`}  alt={eachListItem.company} />
                </div>
{/* ============================================================================================ */}

                <div className="company-details">
                <div className="name-span">
                <h4 className="company-name">{eachListItem.company}</h4>
                <ul className="new-featured">
                        <li className="new">{eachListItem.new ? "new" : ""}</li>
                        <li className="featured">{eachListItem.featured ? "new" : ""}</li>
                    </ul>
                </div>
                <span className="span"></span>
                <span className="available-role">{eachListItem.position}</span>
                <ul className="datework-method">
                        <li className="on-for">{eachListItem.postedAt}</li> 
                        <li className="duration">{eachListItem.contract}</li>
                        <li className="type">{eachListItem.location}</li>
                    </ul>
                </div>
                </div>
                <div className="right">
        <ul className="services">
        <li className="normal">{eachListItem.role}</li>
        <li className="normal">{eachListItem.level}</li>
        
        {eachListItem.languages.map((eachLang , languageIndex)=>
        { 
            return (
        <li>
            <input 
                key={languageIndex}
                type="button" 
                className="red button" 
                onClick={(e)=>filter(e)} 
                value={eachLang}  
                active={query} />
            </li>
            );
        })}
        {eachListItem.tools.map((eachTool , toolIndex )=>{return(
            <li>
            <input 
            key={toolIndex}
            type="button" 
            className="blue button" 
            onClick={(e)=>filter(e)} 
            value={eachTool} 
            active={query}/>
            </li>
        )})}
        </ul>
    </div>
        </motion.div> )})}
        </motion.div>
    );
}

