import './InfoTable.css';

import React from 'react';
import Loader from './Loader';

const infoTableConfig = {
    light: {
        table: 'ui selectable celled table'
    },
    dark: {
        table: 'ui selectable inverted table'
    }
}

class InfoTable extends React.Component {

    state = { response: null, rows: [], mode: this.props.mode }

    getTableClassName(mode) {
        if (mode === 'dark') {
            return infoTableConfig.dark.table;
        }
        return infoTableConfig.light.table;
    }

    componentWillReceiveProps(props) {
        this.setState({ mode: props.mode, rows: props.rows });
    }

    getLoadingJsxContent(table) {
        return (
            <div>
                <table className={`${table} currency-table`}>
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
                </table>
                <Loader message="gathering data.." />
            </div>
        );
    }

    getLoadedJsxContent(table) {
        return (
            <div>
                <table className={`${table} currency-table`}>
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
                        {this.state.rows}
                    </tbody>
                </table>
            </div>
        );
    }

    renderContent(table) {
        if (this.state.rows.length === 0) {
            return this.getLoadingJsxContent(table);
        }
        return this.getLoadedJsxContent(table);
    }

    render() {
        const tableName = this.getTableClassName(this.props.mode);
        return this.renderContent(tableName);
    }
}

export default InfoTable;