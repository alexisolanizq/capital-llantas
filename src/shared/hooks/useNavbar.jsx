import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartQuery } from "src/modules/store/cart/queries/cart.query";
import useAuthStore from "src/store/authStore";

const useNavbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [visibleDropdown, setVisibleDropdown] = useState(false)
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const { data: cart } = useCartQuery()
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        if (theme) {
            document.querySelector("html").setAttribute('data-theme', 'dark');
        } else {
            document.querySelector("html").removeAttribute('data-theme', "dark");
        }
    }, [theme]);

    const changeVisibility = () => setVisibleMenu(!visibleMenu);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkTo = (path = '') => {
        navigate(path)
        changeVisibility()
    }

    return {
        user,
        cart,
        theme,
        linkTo,
        setTheme,
        location,
        scrolling,
        visibleMenu,
        visibleDropdown, 
        changeVisibility,
        setVisibleDropdown
    };
};

export default useNavbar;
