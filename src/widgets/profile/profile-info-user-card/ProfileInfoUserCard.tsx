import { CardContainer, CONFIG_APP, TimeServices, useNavigationReact } from '../../../shared';
import { OptionsSvg } from '../../../shared/svg/OptionsSvg';
import { CardUserInfoItem } from '../card-user-info-item/CardUserInfoItem';

import styles from './ProfileInfoUserCard.module.scss';


type Props = {
  avatar: string | null;
  name: string;
  email: string;
  gender: string;
  dateOfBirte: string;

}

const ProfileInfoUserCard = ({ dateOfBirte, gender, email, avatar, name  }: Props) => {
const { router } = useNavigationReact()


  const handleNavigateEditUser = () => {
    router('/account/edit')
  }

  const currentAvatar = avatar ? avatar : CONFIG_APP.EMPTY_AVATAR

  return (
    <CardContainer>
      <section className={styles.root}>
        <div onClick={handleNavigateEditUser}  className={styles.editSvg}>
            <OptionsSvg width='20' height='20'/>
        </div>
        <div className={styles.cardHeader}>
          <img src={currentAvatar} alt="Profile Avatar" width={150} height={150} className={styles.cardImage} />
        </div>
          <h2 className={styles.cardUserName}>{name ? name : '---'}</h2> 


      <div className={styles.cardUserInfo}>
    <CardUserInfoItem 
    label='Email'
    value={email ? email : '---'}
    />
    <CardUserInfoItem 
    label='Gender'
    value={gender ? gender : '---'}
    />
    <CardUserInfoItem 
    label='Date Of Birte'
    value={dateOfBirte ? TimeServices.getDayMonthYear(dateOfBirte) : '---'}
    />
    </div>

      </section>
    </CardContainer>
  );
};

export { ProfileInfoUserCard };