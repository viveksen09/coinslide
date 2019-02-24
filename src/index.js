import React from 'react';
import ReactDOM from 'react-dom';
import PageLayout from './components/PageLayout'

class App extends React.Component {

    render() {
        return (
            <div style={{backgroundColor: 'black', height: '100vh'}}>
                <PageLayout />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

