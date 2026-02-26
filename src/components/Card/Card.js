import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite,deleteCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();

    const handle = (e) =>{
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteCard(props.id));
    };

    return (
        <li className={styles.card}>
            {props.title}
            
            <div className={styles.buttons}>
                <button onClick={handle} className={clsx(styles.iconButton, { [styles.added]: props.isFavorite === true })} >
                    <i className='fa fa-star-o'></i>
                </button>
                <button onClick={handleDelete} className={styles.deleteButton} >
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </li>

    );
}

export default Card;