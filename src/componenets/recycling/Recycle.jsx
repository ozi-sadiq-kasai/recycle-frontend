import './Recycle.css';
import bin from '../../images/bin.jpeg'; // The smaller image to overlay
import rec from '../../images/rec.jpg';  // The main background image

const Recycle = () => {
    return (
        <div className="recycle-container">
            <div className="recycle-text">
                <h2>Understanding the Purpose and Necessity of Recycling</h2>
                <p>
                    Recycling plays a critical role in conserving natural resources, reducing landfill waste, and minimizing environmental pollution.
                    It involves the process of collecting, processing, and reusing materials that would otherwise be discarded as waste.
                    By recycling, we can significantly reduce the consumption of raw materials, save energy, and lower greenhouse gas emissions.
                </p>
            </div>

            <div className="recycle-image-wrapper">
                <img src={rec} alt="Main visual" className="main-image" />
                <img src={bin} alt="Overlay visual" className="overlay-image" />
            </div>
        </div>
    );
};

export default Recycle;
