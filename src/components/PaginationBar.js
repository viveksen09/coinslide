import './PaginationBar.css';
import React from 'react';

class PaginationBar extends React.Component {

    state = { page: 1 }

    onPageSelected = (page) => {
        this.props.onPageChange(page);
    }

    onNextClick = (event) => {
        var page = this.state.page;
        page = page + 1;
        this.setState({ page });
        this.onPageSelected(page);
    }

    onPrevClick = (event) => {
        var page = this.state.page;
        if (page > 1) {
            page = page - 1;
            this.setState({ page });
            this.onPageSelected(page);
        }
    }

    render() {
        return (
            <div className="pagination">
                <div className="ui six column grid">
                    <div className="row">
                        <div className="column blank"></div>
                        <div className="column blank"></div>
                        <div className="column blank"></div>
                        <div className="column blank"></div>
                        <div className="column blank"></div>
                        <div className="column mode">
                            <i className="arrow circle left icon large" onClick={(e) => this.onPrevClick(e)}></i>
                            <a className="ui yellow circular label" href=".">{this.state.page}</a>
                            <i className="arrow circle right icon large" onClick={(e) => this.onNextClick(e)}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaginationBar;