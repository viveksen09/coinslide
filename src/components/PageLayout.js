import './PageLayout.css';
import React from 'react';
import SearchBar from './SearchBar';

class PageLayout extends React.Component {

    render() {
        return (
            <div className="page-layout">
                <SearchBar />
            </div>
        );
    };
}

export default PageLayout;