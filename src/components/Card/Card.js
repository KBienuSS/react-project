import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = props => {

    const dispatch = useDispatch();
    const handle = (e) =>{
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    }

    return (
        <li className={styles.card}>
            {props.title}
            
            <button onClick={handle} className={clsx(styles.iconButton, { [styles.added]: props.isFavorite === true })} >
                <i className='fa fa-star-o'></i>
            </button>
        </li>

    );
}

export default Card;