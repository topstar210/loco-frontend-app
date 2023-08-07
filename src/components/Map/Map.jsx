import React, { useEffect, useState } from 'react';
import GoogleMap from 'google-map-react';

import Marker from "./Marker";

let googleMap, googleMaps;

const Map = ({ gpsPoints }) => {
    const [center, setCenter] = useState({});
    const [polyline, setPolyline] = useState(null);

    const handleGoogleMapApi = (map, maps, path) => {
        // console.log("gpsPoints", path)
        googleMap = map;
        googleMaps = maps;
        if (polyline) {
            polyline.setMap();
        }
        const trainPath = new maps.Polyline({
            path: path,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2,
        });
        setPolyline(trainPath);
        trainPath.setMap(map);
    };

    useEffect(()=>{
        if(googleMap && googleMaps){
            handleGoogleMapApi(googleMap, googleMaps, gpsPoints)
        }
    },[gpsPoints])

    // calc center of map by gps points
    const getCenter = (gpsPoints) => {
        if (gpsPoints.length === 0) {
            return { lat: 0, lng: 0 };
        }

        const totalLat = gpsPoints.reduce((acc, location) => acc + location.lat, 0);
        const totalLng = gpsPoints.reduce((acc, location) => acc + location.lng, 0);

        return { lat: totalLat / gpsPoints.length, lng: totalLng / gpsPoints.length };
    };

    const getMapCenter = (args) => {
        setCenter(args.center)
    }

    useEffect(() => {
        const center = getCenter(gpsPoints);
        setCenter(center)
    }, [gpsPoints])

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMap
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
                center={center}
                defaultZoom={8}
                onChange={getMapCenter}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleGoogleMapApi(map, maps, gpsPoints)}
            >
                {gpsPoints.map((coords, index) => (
                    <Marker
                        key={index}
                        lat={coords.lat}
                        lng={coords.lng}
                        name={index}
                    />
                ))}
            </GoogleMap>
        </div>
    );
};

export default Map;
