import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { categories } from '../../configuration/categories';


export default class SelectCategory extends Component {
    constructor(props) {
        super(props);

    }

    handleCategoryChange = (event, data) => {
        //this.setState({value: data.value});
        console.log(data.value)
        //this.props.changeCurrency(data.value);
    }
    render() {
        return (
            <div className='selet-category-dropdown-wrapper'>
                <Dropdown 
                    placeholder='Category'
                    selection
                    onChange={(event, data)=>this.props.onCategoryChoice(data.value)}
                    options={categories}/>
            </div>
        )
    }
}

