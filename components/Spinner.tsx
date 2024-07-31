import styles from './Spinner.module.css'

const Loading = () => {
    
    return (
        <div className={styles.spinnerWarpper}>
        <div className={styles.loader}></div>
        </div>
    );
  };
  
  export default Loading;