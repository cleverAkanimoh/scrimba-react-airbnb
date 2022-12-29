import data from './Data';
import star from '../images/star.png';

const Experiences = ({img,price,rating,tagline,country,number,category}) => {
    return (
        <section id="card">
            {
                data.map(people => {
                    <article class="article--container">
                <img src={people.img} alt="image" class="card--img" />
                <div className='article--div'>
                    <img src={star} alt="star" className="star--img" />
                    <var>{people.rating}</var>&nbsp;
                    <samp>({people.number})<small></small><abbr>{people.country}</abbr></samp>
                </div>
                <p>{people.tagline}</p>
                <p><strong>From ${people.price}</strong><span className="article--para-span"> / person</span></p>
                <span className="category">{people.category}</span>
            </article>
                })
            }
        </section>
    );
}

export default Experiences;