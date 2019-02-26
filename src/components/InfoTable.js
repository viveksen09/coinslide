import React from 'react';
import Axios from 'axios';
import TableRow from './TableRow';

class InfoTable extends React.Component {

    state = { rows: [] }

    getTableRows = async () => {
        const response = await Axios.get('https://api.bittrex.com/api/v1.1/public/getcurrencies',
            {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
        const rows = this.buildTableRows(response.data.result);
        this.setState({ rows });
    }

    buildTableRows(coins) {
        const rows = coins.map((coin) => {
            return (
                <TableRow key={coin.Currency} coin={coin}/>
            );
        });
        return rows;
    }

    componentDidMount() {
        this.getTableRows();
    }

    render() {
        return (
            <table className="ui selectable inverted table">
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Symbol</th>
                        <th>Active</th>
                        <th>Type</th>
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