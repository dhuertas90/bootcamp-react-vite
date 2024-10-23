import React from "react";
import CardComponent from "./CardComponent";
import QrComponent from "./QrComponent";
import './App.css';

const BannerComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>
        <CardComponent />
        <QrComponent />
        </div>
    );
};

export default BannerComponent;
