import './TableRow.css';
import React from 'react';

const TableRow = ({ coin }) => {
    return (
        <tr className="table-row">
            <td>{coin.name}</td>
            <td>
                <div>
                    <img src={coin.image.small} alt="coin image" style={{width: '30px' }} />
                </div>
            </td>

            <td>{coin.symbol.toUpperCase()}</td>
            <td>{coin.market_data.current_price.usd.toFixed(2)}</td>
            <td>{coin.market_data.market_cap.usd}</td>
            <td>{coin.market_data.total_volume.usd}</td>
            <td>{coin.market_data.high_24h.usd}</td>
            <td>{coin.market_data.low_24h.usd}</td>
            <td>{coin.market_data.price_change_24h_in_currency.usd}</td>
        </tr>
    );
}

export default TableRow;