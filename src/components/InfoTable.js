import './InfoTable.css';

import React from 'react';
import TableRow from './TableRow';
import coingecko from '../api/coingecko';

const infoTableConfig = {
    light: {
        table: 'ui selectable celled table'
    },
    dark: {
        table: 'ui selectable inverted table'
    }
}

class InfoTable extends React.Component {

    state = { response: null, rows: [], mode: this.props.mode }

    getTableRows = async () => {
        const response = await coingecko.get('/coins');
        //TODO: Remove the console log.
        console.log(response);
        const rows = this.buildTableRows(response.data, this.props.mode);
        this.setState({ response, rows, mode: this.props.mode });
    }

    buildTableRows(coins, mode) {
        const rows = coins.map((coin) => {
            return (
                <TableRow key={coin.id} coin={coin} mode={mode} />
            );
        });
        return rows;
    }

    getFilteredTableRows(term) {
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
    }

    componentDidMount() {
        this.getTableRows();
    }

    componentWillReceiveProps(props) {
        if (props.term) {
            const filteredRows = this.getFilteredTableRows(props.term);
            if (filteredRows.length > 0) {
                const rows = this.buildTableRows(filteredRows, props.mode);
                this.setState({ rows });
            }
        } else if (this.state.mode !== props.mode) {
            const rows = this.buildTableRows(this.state.response.data, props.mode);
            this.setState({ rows, mode: props.mode });
        }
    }

    getTableClassName(mode) {
        if (mode === 'dark') {
            return infoTableConfig.dark.table;
        }
        return infoTableConfig.light.table;
    }

    render() {
        const tableName = this.getTableClassName(this.props.mode);
        return (
            <table className={`${tableName} currency-table`}>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th></th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Cap</th>
                        <th>Volume</th>
                        <th>24Hr Low</th>
                        <th>24Hr High</th>
                        <th>24Hr Change</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rows}
                </tbody>
            </table>
        );
    }
}

export default InfoTable;