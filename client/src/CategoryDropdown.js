import React from 'react';
import LevelsDropdown from './LevelsDropdown';

const CategoryDropdown = (props) => {
    const firstOption = (props.name !== 'Category')
    ? <option value= {props.selection}>Something messed up is you see this</option>  
    : <option value= {props.categoryList}>Select a Category</option>; 
    // console.log(props.categoryList)
    
    const theCategoryList = props.categoryList.map((eachCategory, index) => {
        return <option key={index} value={eachCategory.category_type}>{eachCategory.category_type}</option>
        // console.log(eachCategory.category_type)
    }) 


    return (
        <div>
            {props.name}: 
            <select
                name={props.name}
                value={props.selection}
                onChange={(event) => props.handleChange(event)}
            >

                {firstOption}
                {theCategoryList}
            
            </select>
            <LevelsDropdown 
                name = 'Levels'
                // levelList = {props.}
                handleChange= {props._handleLevelSelect}
                selection = {props.selection}
            />

        </div>
    )

    
}


export default CategoryDropdown;