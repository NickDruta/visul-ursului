import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'

import './About.scss'

export default function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <div className="about-component">
      <div className="about-component-title">
        Despre Visul Ursului
      </div>
      <div className="about-component-block-1">
        <div className="about-component-block-1-left">
          Visul ursului - mai mult decât o pasiune pentru miere, o întreagă tradiție, care a evoluat pe parcursul multor ani. Am reușit să îmbinăm gustul rafinat și finețea definită într-un produs unic, colectat de pe meleagurile Orheiului Vechi.
        </div>
        <div className="about-component-block-1-right">
          <MapContainer center={[47.2968315013014, 29.015808544694654]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[47.2968315013014, 29.015808544694654]}>
              <Popup>
                Locul de recoltare
              </Popup>
            </Marker>
            <Circle center={[47.2968315013014, 29.015808544694654]} pathOptions={{ fillColor: 'blue' }} radius={3000} />
          </MapContainer>
        </div>
      </div>
      <div className="about-block-component-block-2">

      </div>
    </div>
  )
}
