import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.fieldLabel}>Title:</span>
            <TextInput 
                value={title} 
                onChange={e => setTitle(e.target.value)}
                className={styles.textInput}
            />
            <span className={styles.fieldLabel}>Icon:</span>
            <TextInput 
                value={icon} 
                onChange={e => setIcon(e.target.value)}
                className={styles.textInput}
            />
            <Button className={styles.formButton}>Add column</Button>
        </form>
    );
};

export default ColumnForm;