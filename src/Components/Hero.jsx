import gridImage from "../images/photo-grid.png";

const Hero = () => {
    return (
        <section className="hero">
            <img src={gridImage} alt='grid photos' className="hero--photo" />
            <h2 className="hero--header">Online Experiences</h2>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
     );
}

export default Hero;