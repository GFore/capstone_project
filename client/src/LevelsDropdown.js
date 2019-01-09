import React from 'react';

const LevelsDropdown = (props) => {
    // console.log(props)
    const firstOption = (props.name !== 'Level')
    ? <option value= {props.levelList}>Select a Level</option>
    : <option value= {props.levelSelection}>WRONG</option>;
    // console.log(props.levelList)

    const theListOfLevel = [];
    props.levelList.forEach((eachLevel) =>{
        if((props.categoryId === eachLevel.id_category) && (!theListOfLevel.includes(eachLevel.level))){
            theListOfLevel.push(eachLevel.level)
        }
    })

    const theEachLevel = theListOfLevel.map((eachLevel, index) =>{
        return <option key={index} value={eachLevel}>{eachLevel}</option>
    })

    return (
        <div>
            {props.name}:
            <select
                value={props.levelSelection}
                onChange={(event) => props.handleLevel(event)}
            >
                {firstOption}  
                {theEachLevel}
            </select>
        </div>
    )
}

export default LevelsDropdown;