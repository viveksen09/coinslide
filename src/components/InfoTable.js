import './InfoTable.css';

import React from 'react';
import TableRow from './TableRow';
import  coingecko from '../api/coingecko';

class InfoTable extends React.Component {

    state = { rows: [] }

    getTableRows = async () => {
        const response = await coingecko.get('/coins');
        console.log(response);
        const rows = this.buildTableRows(response.data);
        this.setState({ rows });
    }

    buildTableRows(coins) {
        const rows = coins.map((coin) => {
            return (
                <TableRow key={coin.id} coin={coin}/>
            );
        });
        return rows;
    }

    componentDidMount() {
        this.getTableRows();
    }

    render() {
        return (
            <table className="ui selectable inverted table currency-table">
                <thead>
                    <tr>
                        <th>Currency</th>
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