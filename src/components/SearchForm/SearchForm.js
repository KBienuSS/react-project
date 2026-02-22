import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
    
const SearchForm = () => {

    const [string, setString] = useState('');
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCH_STRING', payload: string });
    };

    return (
        <form onSubmit={submit} className={styles.searchForm}>
            <TextInput placeholder="Search..." onChange={e => setString(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };
export default SearchForm;