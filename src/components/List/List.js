import styles from './List.module.scss';  
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getFilteredColumns, getListById } from '../../redux/store';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const List = props => {

    const { listId } = useParams();
    const columns = useSelector(state => getFilteredColumns(state, listId));
    const listData = useSelector(state => getListById(state, listId));

  if(!listData) return <Navigate to="/" />  
  return (
    <main>
        <SearchForm />
        <div className={styles.List}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <ColumnForm listId={listId}/>
            <section className={styles.columns}>    
                {columns.map(column => <Column key={column.id} {...column}/>)}
            </section>
        </div>
    </main>
  );
};

export default List;