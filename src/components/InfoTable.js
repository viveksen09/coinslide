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

    state = { allRows: [], allLightRows: [], rows: [], mode: this.props.mode, showLoader: true, page: 1 }

    getTableClassName(mode) {
        if (mode === 'dark') {
            return infoTableConfig.dark.table;
        }
        return infoTableConfig.light.table;
    }

    componentWillReceiveProps(props) {
        if (props.page !== this.state.page) {
            this.setState({ page: props.page, showLoader: true });
            return;
        }
        if (this.state.allRows.length === 0) {
            this.setState({ allRows: this.props.rows, allLightRows: this.props.lightRows });
        }
        this.setState({ mode: props.mode, rows: props.rows, showLoader: false });
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

    getLoadedJsxContent(table, rowsToRender) {
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
                        {rowsToRender}
                    </tbody>
                </table>
            </div>
        );
    }

    renderContent(table, rowsToRender) {
        if (this.state.showLoader) {
            return this.getLoadingJsxContent(table);
        }
        return this.getLoadedJsxContent(table, rowsToRender);
    }

    render() {
        var rowsToRender = this.state.allRows;
        if (this.props.mode === 'light') {
            rowsToRender = this.state.allLightRows;
        }
        if (this.props.rows.length > 0) {
            rowsToRender = this.state.rows;
        }

        const tableName = this.getTableClassName(this.props.mode);
        return this.renderContent(tableName, rowsToRender);
    }
}

export default InfoTable;