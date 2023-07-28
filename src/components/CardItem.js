import react from "react";
//import './Cards.css';
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <react.Fragment>
      <li className="card__item" style="margin:5px">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="card img" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </react.Fragment>
  );
}

export default CardItem;
