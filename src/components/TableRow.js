import './TableRow.css';
import React from 'react';

class TableRow extends React.Component {

    render() {
        return (
            <tr className="table-row">
                    <td>{this.props.coin.CurrencyLong}</td>
                    <td>{this.props.coin.Currency}</td>
                    <td>{this.props.coin.IsActive.toString()}</td>
                    <td>{this.props.coin.CoinType}</td>
                </tr>
        );
    }
}

export default TableRow;