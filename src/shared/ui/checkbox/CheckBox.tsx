import {memo} from 'react';

import styles from './CheckBox.module.scss';

interface CheckBoxProps {
  active?: boolean
  onClick?: () => void
  label?: string;
}

const CheckBox = memo(({active, onClick, label}: CheckBoxProps) => {

  const classesRoot = [styles.checkbox]

  if (active) {
    classesRoot.push(styles.active)
  }

  // if (active && colorOrange) {
  //   classesRoot.push(styles.colorOrange)
  // }
  
  return (
    <div  > 
    <div onClick={onClick} className={styles.root}>
      <input type='checkbox' onChange={() => {}} checked={active} id='check'/>
      <label onClick={onClick} htmlFor="check"  className={classesRoot.join(' ')}></label>
      {label &&
        <span className={styles.labelText}>{label}</span>
      }
    </div>
    </div>
  );

});
CheckBox.displayName = 'CheckBox' 

export { CheckBox };