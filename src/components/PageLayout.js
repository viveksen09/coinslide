import './PageLayout.css';
import React from 'react';
import SearchBar from './SearchBar';
import InfoTable from './InfoTable';
import Footer from './Footer';
import TableRow from './TableRow';

import  coingecko from '../api/coingecko';

class PageLayout extends React.Component {

    state = {term: '', mode: 'dark', response: null, rows: [], filteredRows: [], lightRows: []};

    filterRows = (term) => {
        const newRows = [];
        const filteredRow = this.state.response.data.find((row) => {
            return (
                row.name.toLowerCase() === term.toLowerCase() ||
                row.symbol.toLowerCase() === term.toLowerCase()
            );
        });
        if (filteredRow) {
            newRows.push(filteredRow);
        }
        return newRows;
    };

    onCommencingSearch = (term) => {
        this.setState({term: term});
        const filteredRows = this.filterRows(term);
        const rows = this.buildTableRows(filteredRows, this.state.mode);
        this.setState({ rows, filteredRows });
    };

    onModeChange = (mode) => {
        const rows = this.buildTableRows(this.state.filteredRows, mode);
        this.setState({ rows, mode });
    };

    getTableRows = async () => {
        const response = await coingecko.get('/coins');
        //TODO: Remove the console log.
        console.log(response);
        const rows = this.buildTableRows(response.data, this.state.mode);
        const lightRows = this.buildTableRows(response.data, 'light');
        this.setState({ response, rows, lightRows, filteredRows: response.data });
    }

    buildTableRows(coins, mode) {
        const rows = coins.map((coin) => {
            return (
                <TableRow key={coin.id} coin={coin} mode={mode}/>
            );
        });
        return rows;
    }

    componentDidMount() {
        this.getTableRows();
    }

    render() {
        return (
            <div className={`page-layout ${this.state.mode}`}>
                <div className="search-layout">
                    <SearchBar onSearch={this.onCommencingSearch}/>
                    <InfoTable mode={this.state.mode} rows={this.state.rows} lightRows={this.state.lightRows} response={this.state.response} />
                    <Footer mode={this.state.mode} onModeChange={this.onModeChange}/>
                </div>
            </div>
        );
    };
}

export default PageLayout;