import './TableRow.css';
import React from 'react';

class TableRow extends React.Component {

    render() {
        return (
            <tr className="table-row">
                    <td>{this.props.coin.name}</td>
                    <td>{this.props.coin.symbol.toUpperCase()}</td>
                    <td>{this.props.coin.market_data.current_price.usd}</td>
                    <td>{this.props.coin.market_data.market_cap.usd}</td>
                    <td>{this.props.coin.market_data.total_volume.usd}</td>
                    <td>{this.props.coin.market_data.high_24h.usd}</td>
                    <td>{this.props.coin.market_data.low_24h.usd}</td>
                    <td>{this.props.coin.market_data.price_change_24h_in_currency.usd}</td>
                </tr>
        );
    }
}

export default TableRow;