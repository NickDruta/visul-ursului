import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";

import cls from "./About.module.scss";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={cls.aboutPageWrapper}>
      <div className={cls.title}>Despre Visul Ursului</div>
      <div className={cls.firstBlock}>
        <div className={cls.firstBlockLeft}>
          Visul ursului - mai mult decât o pasiune pentru miere, o întreagă
          tradiție, care a evoluat pe parcursul multor ani. Am reușit să îmbinăm
          gustul rafinat și finețea definită într-un produs unic, colectat de pe
          meleagurile Orheiului Vechi.
        </div>
        <div className={cls.firstBlockRight}>
          <MapContainer
            /* @ts-ignore */
            center={[47.2968315013014, 29.015808544694654]}
            zoom={12}
            scrollWheelZoom={false}
          >
            <TileLayer
              /* @ts-ignore */
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[47.2968315013014, 29.015808544694654]}>
              <Popup>Locul de recoltare</Popup>
            </Marker>
            <Circle
              center={[47.2968315013014, 29.015808544694654]}
              /* @ts-ignore */
              radius={3000}
            >
              <Circle
                center={[47.2968315013014, 29.015808544694654]}
                pathOptions={{ fillColor: "blue" }}
                /* @ts-ignore */
                radius={10}
              />
            </Circle>
          </MapContainer>
        </div>
      </div>
      <div className="about-block-component-block-2"></div>
    </div>
  );
};

export default About;
