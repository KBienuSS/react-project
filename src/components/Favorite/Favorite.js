import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getAllFavorites } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import styles from './Favorite.module.scss'; 

const Favorite = () =>{

    const favoriteCardsList = useSelector(state => getAllFavorites(state));

    if(favoriteCardsList.length === 0) return(
      <div>
          <PageTitle children="Favorite"/>
          <div className={styles.favoriteWrapper}>
            <span className={styles.noCards}>No cards...</span>
          </div>
      </div>
    );

    return(
      <div>
          <PageTitle children="Favorite"/>
          <div className={styles.favoriteWrapper}>
            <ul className={styles.cards}>
              {favoriteCardsList.map(card => (
                  <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>
              ))}
            </ul>
          </div>
      </div>
    );  
}

export default Favorite;