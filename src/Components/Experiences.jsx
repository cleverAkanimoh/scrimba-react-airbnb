import image from '../images/katie-zaferes.png';
import star from '../images/star.png';

const Experiences = () => {
    return (
        <section id="card">
            <article class="article--container">
                <img src={image} alt="katie-zaferes" class="card--img" />
                <div className='article--div'>
                    <img src={star} alt="star" />
                    <small>5.0</small>&nbsp;
                    <samp>(6)&circ;</samp>
                    <abbr>USA</abbr>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </article>
            <article class="article--container">
                <img src={image} alt="katie-zaferes" class="card--img" />
                <div className='article--div'>
                    <img src={star} alt="star" />
                    <small>5.0</small>&nbsp;
                    <samp>(6)&circ;</samp>
                    <abbr>USA</abbr>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </article>
            <article class="article--container">
                <img src={image} alt="katie-zaferes" class="card--img" />
                <div className='article--div'>
                    <img src={star} alt="star" />
                    <small>5.0</small>&nbsp;
                    <samp>(6)&circ;</samp>
                    <abbr>USA</abbr>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong> / person</p>
            </article>
        </section>
    );
}

export default Experiences;