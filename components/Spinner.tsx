import styles from './Spinner.module.css'

const Loading = () => {
    
    return (
        <div className={styles.spinnerWarpper} data-testid="spinner-wrapper">
        <div className={styles.loader} data-testid="loader"></div>
        </div>
    );
  };
  
  export default Loading;