import "./services.css"

const Services = () => {
    return (
        <div className="services">
            <div className="service-item">
                <i className="bi bi-card-image service-icon"></i>
                Adventures
            </div>
            <div className="service-item">
                <i className="bi bi-people-fill service-icon"></i>
                Family Tours
            </div>
            <div className="service-item">
                <i className="bi bi-building service-icon"></i>
                City Cards
            </div>
            <div className="service-item">
                <i className="bi bi-globe service-icon"></i>
                MultiDay Trips
            </div>
        </div>
    );
}
export default Services;