import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1328317450904014851/MaiXdwhy_bigger.jpg" alt="Felipe ALves" />
            <div>
                <strong>Felipe Alves</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}