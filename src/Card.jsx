import pinImg from './assets/gallery/pin.svg'

export default function Card(prop){
	return (
		<div className="card-outer">
			<div className="card-inner">
				<div className="pic-container">
					<img src={prop.imageUrl}/>
				</div>
				<div className="text-container">
					<div className="top-text-container">
						<img src={pinImg} alt="Pin"/>
						<p className='location'>{prop.location}</p>
						<p className="gmap">
							<a href={prop.googleMapsUrl}>View on Google Maps</a>
						</p>
					</div>
					<h1>{prop.title}</h1>
					<strong>{prop.startDate} - {prop.endDate}</strong>
					<p className="text-description">{prop.description}</p>
				</div>
			</div>
		</div>
	)
}


// title: "Crete",
// location: "Crete Island",
// googleMapsUrl: "https://maps.app.goo.gl/cYohS2VcobrMZK7H7",
// startDate: "12 Sept, 2018",
// endDate: "20 Sept, 2018",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl:

