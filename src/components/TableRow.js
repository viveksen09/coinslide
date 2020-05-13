import './TableRow.css';
import React from 'react';

const TableRow = ({ coin, mode, currency }) => {
    return (
        <tr className={`table-row ${mode}`}>
            <td style={{ width: '10%'}}>{coin.name}</td>
            <td style={{ width: '10%'}}>
                <div>
                    <img src={coin.image.small} alt="coin logo" style={{width: '30px' }} />
                </div>
            </td>
            
            <td style={{ width: '10%'}}>{coin.symbol.toUpperCase()}</td>
            <td style={{ width: '12%'}}>{eval(`coin.market_data.current_price.${currency}.toFixed(2)`)}</td>
            <td style={{ width: '12%'}}>{eval(`coin.market_data.market_cap.${currency}.toFixed(2)`)}</td>
            <td style={{ width: '12%'}}>{eval(`coin.market_data.total_volume.${currency}.toFixed(4)`)}</td>
            <td style={{ width: '10%'}}>{eval(`coin.market_data.high_24h.${currency}.toFixed(4)`)}</td>
            <td style={{ width: '10%'}}>{eval(`coin.market_data.low_24h.${currency}.toFixed(4)`)}</td>
            <td style={{ width: '10%'}}>{eval(`coin.market_data.price_change_24h_in_currency.${currency}.toFixed(4)`)}</td>
        </tr>
    );
}

export default TableRow;