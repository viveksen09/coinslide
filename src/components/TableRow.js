import './TableRow.css';
import React from 'react';

const TableRow = ({ coin, mode, currency }) => {
    const high_24h = (coin.market_data.high_24h[currency] !== undefined) ? coin.market_data.high_24h[currency].toFixed(4) : "-" ;
    const low_24h = (coin.market_data.high_24h[currency] !== undefined) ? coin.market_data.low_24h[currency].toFixed(4) : "-" ;
    const change_24h = (coin.market_data.high_24h[currency] !== undefined) ? coin.market_data.high_24h[currency].toFixed(4) : "-" ;
    return (
        <tr className={`table-row ${mode}`}>
            <td style={{ width: '10%'}}>{coin.name}</td>
            <td style={{ width: '10%'}}>
                <div>
                    <img src={coin.image.small} alt="coin logo" style={{width: '30px' }} />
                </div>
            </td>
            
            <td style={{ width: '10%'}}>{coin.symbol.toUpperCase()}</td>
            <td style={{ width: '12%'}}>{coin.market_data.current_price[currency].toFixed(2)}</td>
            <td style={{ width: '12%'}}>{coin.market_data.market_cap[currency].toFixed(2)}</td>
            <td style={{ width: '12%'}}>{coin.market_data.total_volume[currency].toFixed(2)}</td>
            <td style={{ width: '10%'}}>{high_24h}</td>
            <td style={{ width: '10%'}}>{low_24h}</td>
            <td style={{ width: '10%'}}>{change_24h}</td>
        </tr>
    );
}

export default TableRow;