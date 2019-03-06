import './PageLayout.css';
import React from 'react';
import SearchBar from './SearchBar';
import InfoTable from './InfoTable';
import Footer from './Footer';

class PageLayout extends React.Component {

    state = {term: ''};

    onCommencingSearch = (term) => {
        this.setState({term: term});
    }

    render() {
        return (
            <div className="page-layout">
                <div className="search-layout">
                    <SearchBar onSearch={this.onCommencingSearch}/>
                    <InfoTable />
                    <Footer />
                </div>
            </div>
        );
    };
}

export default PageLayout;