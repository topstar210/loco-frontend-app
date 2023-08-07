import React from "react"

const Marker = ({ lat, lng, name }) => (
    <div className="place" style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 15,
        height: 15,
        top: -7.5,
        left: -7.5,
        borderRadius: '50%',
        backgroundColor: 'red',
        opacity: 0.8
    }}
        lat={lat}
        lng={lng}
    >
        { name }
    </div>
);

export default Marker;