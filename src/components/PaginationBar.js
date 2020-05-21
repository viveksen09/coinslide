import './PaginationBar.css';
import React from 'react';

class PaginationBar extends React.Component {

    state = { page: 1, leftBtn: 'disabled', rightBtn: '' }

    onPageSelected = (page) => {
        this.props.onPageChange(page);
    }

    onNextClick = (event) => {
        var page = this.state.page;
        page = page + 1;
        this.setState({ page, leftBtn: '' });
        this.onPageSelected(page);
    }

    onPrevClick = (event) => {
        var page = this.state.page;
        if (page > 1) {
            page = page - 1;
            this.setState({ page });
            this.onPageSelected(page);
        }
        if (page === 1) {
            this.setState({ leftBtn: 'disabled' });
        }
    }

    render() {
        return (
            <div className="pagination">
                <div className="ui four column grid">
                    <div className="row">
                        <div className="column blank"></div>
                        <div className="column blank"></div>
                        <div className="column blank"></div>
                        <div className="column mode">
                            <button className="ui tiny yellow button" disabled={this.state.leftBtn} onClick={(e) => this.onPrevClick(e)}>
                                <i className="arrow left icon"></i>
                            </button>
                            <button className="ui tiny yellow button">
                                {this.state.page}
                            </button>
                            <button className="ui tiny yellow button" onClick={(e) => this.onNextClick(e)}>
                                <i className="arrow right icon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaginationBar;