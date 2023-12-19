import { ChildrenNodeType } from '../../types/children';

import styles from './CardContainer.module.scss';

const CardContainer = ({ children }: {children: ChildrenNodeType}) => {


  return (
    <article className={styles.root}>
      {children}
    </article>
  );
};

export  {CardContainer};