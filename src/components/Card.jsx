import PropTypes from "prop-types";

export const Card = ({image, title, author, price}) => {
  return (
    <article className="card">
      <figure className="card-img">
        <img src={image}></img>
      </figure>
      <section className="card-info">
        <h3 className="card-title">{ title }</h3>
        <p className="card-author">{ author }</p>
        <p className="card-price">$ { price }</p>
      </section>
    </article>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
