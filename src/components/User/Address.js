import Geo from "../geo/geo";

export default function Address({street, suite, city, zipcode, geo}) {
    return (
        <div>
            <h4>address:</h4>
            <div>street: {street}<br/> suite: {suite}<br/> city: {city}<br/> zipcode: {zipcode}</div>
            <Geo{...geo}/>
        </div>
    );
}