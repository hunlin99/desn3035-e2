"use client"

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { LineChart, ResponsiveContainer } from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from 'https://cdn.esm.sh/react-leaflet/MapContainer';
import "leaflet/dist/leaflet"

export default function Content() {

    return <>
    <div className="container">
        <div className="row">
            <div className="col-6">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
            </div>
            <div className="col-6">
                [CHART GOES HERE]
            </div>
            <div className="col-12">
                [ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /]
            </div>
        </div>
    </div>
        <h1>My first day work</h1>
    </>
}

