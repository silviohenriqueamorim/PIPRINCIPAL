import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './banner.module.css'; // Importando o módulo CSS
import bannerImage from '../../assets/contentBanner.png';

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <img src={bannerImage} className={styles.bannerImage} alt="Banner" />
        </div>
    );
};

export default Banner;
