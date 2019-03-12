import './InfoTable.css';

import React from 'react';

const infoTableConfig = {
    light: {
        table: 'ui selectable celled table'
    },
    dark: {
        table: 'ui selectable inverted table'
    }
}

class InfoTable extends React.Component {

    state = { allRows: [], rows: [], mode: this.props.mode }

    getTableClassName(mode) {
        if (mode === 'dark') {
            return infoTableConfig.dark.table;
        }
        return infoTableConfig.light.table;
    }

    componentWillReceiveProps(props) {
        if (this.state.allRows.length === 0) {
            this.setState({ allRows: this.props.rows });
        }
        this.setState({ mode: props.mode, rows: props.rows });
    }

    render() {
        
        var rowsToRender = this.state.allRows;
        if (this.props.rows.length > 0) {
            rowsToRender = this.state.rows;
        }
        
        const tableName = this.getTableClassName(this.props.mode);
        return (
            <table className={`${tableName} currency-table`}>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th></th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>Volume</th>
                        <th>24Hr Low</th>
                        <th>24Hr High</th>
                        <th>24Hr Change</th>
                    </tr>
                </thead>
                    <tbody>
                        {rowsToRender}
                    </tbody>
            </table>
        );
    }
}

export default InfoTable;