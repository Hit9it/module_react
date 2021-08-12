import Geo from "../geo/geo";

export default function Address({street, suite, city, zipcode, geo}) {
    return (
        <div>
            address:<br/> street:{street}<br/> suite:{suite}<br/> city:{city}<br/> zipcode:{zipcode}
            <Geo{...geo}/>
        </div>
    );
}