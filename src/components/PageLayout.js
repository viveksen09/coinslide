import './PageLayout.css';
import React from 'react';
import SearchBar from './SearchBar';
import InfoTable from './InfoTable';
import Footer from './Footer';

class PageLayout extends React.Component {

    state = {term: '', mode: 'dark'};

    onCommencingSearch = (term) => {
        this.setState({term: term});
    };

    onModeChange = (mode) => {
        this.setState({ mode });
    };

    render() {
        console.log('mode in parent', this.state.mode);
        return (
            <div className={`page-layout ${this.state.mode}`}>
                <div className="search-layout">
                    <SearchBar onSearch={this.onCommencingSearch}/>
                    <InfoTable mode={this.state.mode}/>
                    <Footer mode={this.state.mode} onModeChange={this.onModeChange}/>
                </div>
            </div>
        );
    };
}

export default PageLayout;