import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';

const CardForm = props => {
    const [title, setTitle] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
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