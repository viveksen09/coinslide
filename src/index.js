import React from 'react';
import ReactDOM from 'react-dom';
import PageLayout from './components/PageLayout'

class App extends React.Component {

    render() {
        return (
            <div>
                <PageLayout />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

