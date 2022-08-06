import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
    return(
        <header className={classes.header}>
            <nav className={classes.nav}>
            <div className={classes.logo}> Greate Quates</div>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassName={classes.active} >All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quote' activeClassName={classes.active} >Add Quotes</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default MainNavigation;