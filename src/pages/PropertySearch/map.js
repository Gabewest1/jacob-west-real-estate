import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import marketData from "../../components/ListingsList/marketData"

const Markers = () => marketData.map(home => <Marker position={{ lat: home.lat, lng: home.lng }} />)

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: "100%" }} />,
        containerElement: <div style={{ height: "400px" }} />,
        mapElement: <div style={{ height: "100%" }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 30.511164, lng: -97.648347 }}>
        {/* {props.isMarkerShown && <Marker position={{ lat: 30.511164, lng: -97.648347 }} />} */}
        <Markers/>
    </GoogleMap>
)

class Map extends React.Component {
    render() {
        return (
            <MyMapComponent />
        )
    }
}

export default Map
