import "../css/card.css";

function Card(props) {
  const {
    data: { title, oldPrice, newPrice, rating, sale, inCart, imageUrl },
    handleCart,
    index,
  } = props;
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        {sale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
        {/* <!-- Product image--> */}
        <img className="card-img-top" src={imageUrl} alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{title}</h5>
            {/* <!-- Product reviews--> */}
            <div
              className="
              d-flex
              justify-content-center
              small
              text-warning
              mb-2
            "
            >
              {starRating(rating)}
            </div>
            {/* <!-- Product price--> */}
            <span className="text-muted text-decoration-line-through">
              {oldPrice}
            </span>
            {" " + newPrice}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => handleCart(index)}
            >
              {inCart ? (
                <span style={{ color: "red" }}>Remove from cart</span>
              ) : (
                <span style={{ color: "green" }}>Add to cart</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function starRating(value) {
  let stars = [];
  let i = 1;
  if (!(value > 5)) {
    while (i <= value) {
      stars.push(<div key={i++} className="bi-star-fill"></div>);
    }
    if (value % 1 !== 0) {
      stars.push(<div key={i++} className="bi-star-half"></div>);
    }
  }
  while (i <= 5) {
    stars.push(<div key={i++} className="bi-star"></div>);
  }
  return stars;
}

export default Card;
