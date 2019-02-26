import React from 'react';
import Axios from 'axios';
import TableRow from './TableRow';

class InfoTable extends React.Component {

    state = { coins: [], rows: [] }

    getCoinList = async () => {
        const response = await Axios.get('https://api.bittrex.com/api/v1.1/public/getcurrencies',
            {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
        this.setState({ coins: response.data.result });
        console.log(this.state.coins);
        const rows = this.buildTableRows();
        this.setState({ rows });
    }

    buildTableRows() {
        const rows = this.state.coins.map((coin) => {
            return (
                <TableRow coin={coin}/>
            );
        });
        return rows;
    }

    componentDidMount() {
        this.getCoinList();
    }

    onformLoad = (event) => {
        this.setState({ rows: this.buildTableRows});
    }

    render() {
        return (
            <table className="ui selectable inverted table" onLoad={this.onformLoad}>
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