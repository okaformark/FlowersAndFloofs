import React from 'react';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';


class Home extends React.Component {
    render (){
        return (
            <div className="Home">
                <NavBar />
                <header className="App-header">
                    <Shop />
                </header>
            </div>
        )
    }
}

export default Home;
