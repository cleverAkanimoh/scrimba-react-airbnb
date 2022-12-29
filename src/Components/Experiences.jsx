import image from '../images/katie-zaferes.png';
import star from '../images/star.png';

const Experiences = () => {
    return (
        <section id="card">
            <article class="article--container">
                <img src={image} alt="katie-zaferes" class="card--img" />
                <div className='article--div'>
                    <img src={star} alt="star" className="star--img" />
                    <var>5.0</var>&nbsp;
                    <samp>(6)<small></small><abbr>USA</abbr></samp>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong><span className="article--para-span"> / person</span></p>
                <span className="category">sold out</span>
            </article>
            <article class="article--container">
                <img src={image} alt="katie-zaferes" class="card--img" />
                <div className='article--div'>
                    <img src={star} alt="star" className="star--img" />
                    <var>5.0</var>&nbsp;
                    <samp>(6)<small></small><abbr>USA</abbr></samp>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136</strong><span className="article--para-span"> / person</span></p>
                <span className="category">sold out</span>
            </article>
        </section>
    );
}

export default Experiences;