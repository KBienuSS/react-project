import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';
    
const SearchForm = () => {

    const [string, setString] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateSearchString(""));
    }, [dispatch]);

    const submit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(string));
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