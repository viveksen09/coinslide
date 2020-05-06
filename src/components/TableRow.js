import './TableRow.css';
import React from 'react';

const TableRow = ({ coin, mode, currency }) => {
    return (
        <tr className={`table-row ${mode}`}>
            <td>{coin.name}</td>
            <td>
                <div>
                    <img src={coin.image.small} alt="coin logo" style={{width: '30px' }} />
                </div>
            </td>
            
            <td>{coin.symbol.toUpperCase()}</td>
            <td>{eval(`coin.market_data.current_price.${currency}.toFixed(2)`)}</td>
            <td>{eval(`coin.market_data.market_cap.${currency}.toFixed(2)`)}</td>
            <td>{eval(`coin.market_data.total_volume.${currency}.toFixed(4)`)}</td>
            <td>{eval(`coin.market_data.high_24h.${currency}.toFixed(4)`)}</td>
            <td>{eval(`coin.market_data.low_24h.${currency}.toFixed(4)`)}</td>
            <td>{eval(`coin.market_data.price_change_24h_in_currency.${currency}.toFixed(4)`)}</td>
        </tr>
    );
}

export default TableRow;