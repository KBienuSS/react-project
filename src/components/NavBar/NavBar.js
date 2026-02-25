import styles from './NavBar.module.scss';  

const NavBar = () =>{

    return(
        <nav>
            <div className={styles.navbar}>
                <div className={styles.iconWrapper}>
                    <a className={styles.navIcon} href="/"><i class="fa fa-tasks"></i></a>
                </div>
                <ul className={styles.listWrapper}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;