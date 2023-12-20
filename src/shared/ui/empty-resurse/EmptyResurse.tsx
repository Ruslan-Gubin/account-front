
import styles from './EmptyResurse.module.scss';

const EmptyResurse = ({text}: {text: string}) => {
  return (
    <div className={styles.root}>
    <h2 className={styles.emptyResurseText}>{text}</h2>
    </div>
  );
};

export  {EmptyResurse};