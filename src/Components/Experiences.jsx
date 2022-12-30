import star from '../images/star.png';

const Experiences = ({people}) => {

    return (
        <section id="card">
            {people.map(person => {
                const { id, img, price, rating, tagline, country, number, category } = person;
                
                return <article key={id} className="article--container">
                    <img src={img} alt="image" className="card--img" />
                    <div className='article--div'>
                        <img src={star} alt="star" className="star--img" />
                        <var>{rating}</var>&nbsp;
                        <samp>({number})<small></small><abbr>{country}</abbr></samp>
                    </div>
                    <p>{tagline}</p>
                    <p><strong>From ${price}</strong><span className="article--para-span"> / person</span></p>
                    <span className="category">{category}</span>
                </article>
            })}
        </section>
    );
}

export default Experiences;