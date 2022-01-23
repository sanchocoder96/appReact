import React from 'react';
import Cardnumber from './components/cardNumber';
import Carousel from './components/carousel';
import Footer from './components/footer';
import Form from './components/form';
import Header from './components/header';
import Main from './components/main';
import Map from './components/map';
import Warum from './components/warum';
import Wie from './components/wie';
import './style.css'

const App2 = () => {
    return (
        <div>
            <Header />
            <Main />
            <Map />
            <Cardnumber />
            <Warum />
            <Carousel />
            <Wie />
            <Form />
            <Footer />
        </div>
    );
}

export default App2;
