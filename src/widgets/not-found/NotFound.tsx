import { useNavigationReact } from '../../shared';

import styles from './NotFound.module.scss';


const NotFound = () => {
  const { router } = useNavigationReact()


  return (
    <div className={styles.root}>
      <section className={styles.content}>
      <h6 className={styles.notFoundTitle}>404</h6>
      <h5 className={styles.notFoundSubTitle}>the page was not found</h5>
      <p className={styles.notFoundText}>the page you are trying to access does not exist or has been deleted.</p>
      <h4 className={styles.linkText}>Go to <button  className={styles.linkGoHome} onClick={() => router('/')}>The main page</button></h4>
      </section>
    </div>
  );
};

export { NotFound };