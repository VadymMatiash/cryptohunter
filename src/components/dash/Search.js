import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeSearchFilter, changeElementsPerPage} from '../../actions/dashActions';

class Search extends Component {

    constructor(){
        super();
        

        this.state = {
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        });
        this.props.changeSearchFilter(event.target.value);
    }

    handleSelectChange(event){
        this.props.changeElementsPerPage(event.target.value);
    }

    // handleSubmit(event){
    //     event.preventDefault();
    //     const {text} = this.state;
    //     this.props.changeSearchFilter(text);
    // }

    render() {
        const {text} = this.state;

        return (
            <div>
                 <form  autoComplete="off">
                <div className="row">
                    <input
                        className="form-control col-md-9"
                        type="text"
                        id="text"
                        autoComplete="off"
                        placeholder="Search..."
                        value={text}
                        onChange={this.handleChange}
                    />
                    <select onChange={this.handleSelectChange} class="form-control col-md-1 offset-2">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                </div>
                </form>
            </div>
        )
    }
}


export default connect(null, {changeSearchFilter, changeElementsPerPage})(Search);