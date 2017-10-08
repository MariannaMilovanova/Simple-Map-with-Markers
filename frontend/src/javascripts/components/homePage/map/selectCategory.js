import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { categories } from '../../configuration/categories';

const SelectCategory = (props) => {
    return (
        <div className='selet-category-dropdown-wrapper'>
            <Dropdown 
                placeholder='Category'
                selection
                onChange={(event, data)=>props.onCategoryChoice(data.value)}
                options={categories}/>
        </div>
    )
}

export default SelectCategory
