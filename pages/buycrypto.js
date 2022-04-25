import React from 'react';

import transakSDK from "@transak/transak-sdk";

const settings = {
    apiKey: 'b9210d34-a584-4161-a7da-5ca836d1a392',  // Your API Key
    environment: 'STAGING', // STAGING/PRODUCTION
    defaultCryptoCurrency: 'ETH',
    themeColor: 'ed6a5a', // App theme color
    hostURL: 'http://localhost:3000',
    widgetHeight: "700px",
    widgetWidth: "500px",
}

const openTransak = () => {
    const transak = new transakSDK(settings);

    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
        console.log(data)
    });

    // This will trigger when the user closed the widget
    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (eventData) => {
        console.log(eventData);
        transak.close();
    });

    // This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
        console.log(orderData);
        window.alert("Payment Success")
        transak.close();
    });
}


export default function Buycrypto() {
    return (
        <div className="p-t-102">
                <button onClick={() => openTransak()}>
                    Buy Crypto
                </button>
        </div>
    );
}