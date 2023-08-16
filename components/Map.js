import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";

const containerStyle = {
    maxWidth: "80vw",
    width: "100%",
    height: "45vh",
};
//25.24402570820406, 55.311215093577694
const center = {
    lat: 25.24402570820406,
    lng: 55.31087670292688,
};

function Map() {
    return (
        <div className="">
            <div className="">
                <LoadScript googleMapsApiKey="AIzaSyAsTMKgKj_G6RmQvTe0RHeWSihkLWLMibk">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}>
                        <MarkerF position={center} title="Al Makhawi Building" />
                        {/* Child components, such as markers, info windows, etc. */}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}

export default React.memo(Map);
