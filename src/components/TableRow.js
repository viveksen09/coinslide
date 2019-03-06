import './TableRow.css';
import React from 'react';

const TableRow = ({ coin, mode }) => {
    console.log('mode in table row:', mode);
    return (
        <tr className={`table-row ${mode}`}>
            <td>{coin.name}</td>
            <td>
                <div>
                    <img src={coin.image.small} alt="coin logo" style={{width: '30px' }} />
                </div>
            </td>

            <td>{coin.symbol.toUpperCase()}</td>
            <td>{coin.market_data.current_price.usd.toFixed(2)}</td>
            <td>{coin.market_data.market_cap.usd.toFixed(2)}</td>
            <td>{coin.market_data.total_volume.usd.toFixed(4)}</td>
            <td>{coin.market_data.high_24h.usd.toFixed(4)}</td>
            <td>{coin.market_data.low_24h.usd.toFixed(4)}</td>
            <td>{coin.market_data.price_change_24h_in_currency.usd.toFixed(4)}</td>
        </tr>
    );
}

export default TableRow;