import styles from './TextInput.module.scss';

const TextInput = props => {
    return <input className={styles.input} placeholder={props.children} type="text" />
}

export default TextInput;