import star from '../images/star.png';

const Experiences = ({data}) => {
    console.log(data);

    return (
        <section id="card">
            {data.map(people => {
                const { img, price, rating, tagline, country, number, category } = data;

                return <article key={number} class="article--container">
                    <img src={img} alt="image" class="card--img" />
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