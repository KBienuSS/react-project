import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const columnId = props.columnId;
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title, columnId}));
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <TextInput 
                value={title} 
                onChange={e => setTitle(e.target.value)}
                className={styles.textInput}
            />
            <Button className={styles.formButton}>Add card</Button>
        </form>
    );
}

export default CardForm;