import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';
import {changeOffset} from '../../actions/dashActions';
import Search from './Search';
import Table from './Table';

class Dashboard extends Component {

    handlePageClick = (data) => {
        this.props.changeOffset(data.selected); 
    }

    render() {
        return (
        <div>
            <Search/>
            <Table cryptoList={this.props.tempListPart} offset={this.props.offset} elementsPerPage={this.props.elementsPerPage}/>
            <ReactPaginate previousLabel={"previous"}
                nextLabel={"next"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                pageLinkClassName={"page-link"}
                pageClassName={"page-item"}
                activeLinkClassName={"active"}
                activeClassName={"active"}
                disabledClassName={"disabled"}
                breakLabel={<a href="" class="page-link">...</a>}
                breakClassName={"break-me"}
                pageCount={this.props.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                forcePage={this.props.offset}
                />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      tempListPart: state.dash.tempList.slice(state.dash.offset*state.dash.elementsPerPage, state.dash.elementsPerPage+state.dash.offset*state.dash.elementsPerPage),
      offset: state.dash.offset,
      elementsPerPage: state.dash.elementsPerPage,
      pageCount: Math.ceil(state.dash.tempList.length / state.dash.elementsPerPage)
  }    
};

export default connect(mapStateToProps, {changeOffset})(Dashboard);
