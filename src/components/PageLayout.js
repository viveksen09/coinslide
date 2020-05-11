import './PageLayout.css';
import React from 'react';
import SearchBar from './SearchBar';
import InfoTable from './InfoTable';
import Footer from './Footer';
import TableRow from './TableRow';
import Accordion from './Accordion';

import  coingecko from '../api/coingecko';

class PageLayout extends React.Component {

    state = {term: '', mode: 'dark', response: null, rows: [], filteredRows: [], lightRows: [], currency: 'usd'};

    filterRows = (term) => {
        const newRows = [];
        this.state.response.data.map((row) => {
            if (row.symbol.toLowerCase().includes(term.toLowerCase()) || row.name.toLowerCase().includes(term.toLowerCase())) {
                newRows.push(row);
            }
            return newRows;
        });
        if (newRows.length === 0) {
            return this.state.response.data;
        }
        return newRows;
    };

    onCommencingSearch = (term) => {
        this.setState({term: term});
        const filteredRows = this.filterRows(term);
        const rows = this.buildTableRows(filteredRows, this.state.mode, this.state.currency);
        this.setState({ rows, filteredRows });
    };

    onModeChange = (mode) => {
        const rows = this.buildTableRows(this.state.filteredRows, mode, this.state.currency);
        this.setState({ rows, mode });
    };

    onCurrencySelected = (currency) => {
        if (currency !== this.state.currency) {
            if (this.state.term !== '') {
                const rows = this.buildTableRows(this.state.filteredRows, this.state.mode, currency);
                const lightRows = this.buildTableRows(this.state.filteredRows, 'light', currency);
                this.setState({ rows, lightRows, currency });
            } else {
                const rows = this.buildTableRows(this.state.response.data, this.state.mode, currency);
                const lightRows = this.buildTableRows(this.state.response.data, 'light', currency);
                this.setState({ rows, lightRows, currency });
            }
        }
    }

    getTableRows = async () => {
        const response = await coingecko.get('/coins');
        //TODO: Remove the console log.
        console.log(response);
        const rows = this.buildTableRows(response.data, this.state.mode, this.state.currency);
        const lightRows = this.buildTableRows(response.data, 'light', this.state.currency);
        this.setState({ response, rows, lightRows, filteredRows: response.data });
    }

    buildTableRows(coins, mode, currency) {
        const rows = coins.map((coin) => {
            return (
                <TableRow key={coin.id} coin={coin} mode={mode} currency={currency} />
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
                </div>
                <div className="accordion-layout">
                    <Accordion response={this.state.response} mode={this.state.mode} onCurrencySelect={this.onCurrencySelected} onModeChange={this.onModeChange} />
                </div>
                <InfoTable mode={this.state.mode} rows={this.state.rows} lightRows={this.state.lightRows} response={this.state.response} />
                <Footer />
            </div>
        );
    };
}

export default PageLayout;