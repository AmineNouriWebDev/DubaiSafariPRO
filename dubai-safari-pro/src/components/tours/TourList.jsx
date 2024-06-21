import "./tour-list.css";
const TourList = ({toursList}) =>{
    return (
    <div className="tour-list">
        {toursList.map(item => 
        <div className="tour-item">
            <img src={item.image} alt={item.title} className="tour-item-img" />
            <span className="tour-item-label">ADVENTURE</span>
            <div className="tour-item-body">
            <div className="tour-item-title">{item.title}</div>
            <div className="tour-item-duration">
                <span>{item.duration}</span> <i className="bi bi-dot"></i>
                Pickup available
            </div>
            <div>Rating</div>
            <div className="tour-item-price">
                <strong>From ${item.priceFrom} </strong>per person
            </div>
            <button className="tour-item-link">
                See More
            </button>
            </div>
        </div>)}
    </div>
);
}
export default TourList;