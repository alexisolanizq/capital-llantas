import { Link } from "react-router-dom"
import { menu } from "src/utils/menu"
import StoreMobileMenu from "./StoreMobileMenu"
import useNavbar from "src/shared/hooks/useNavbar"
import logo from "/public/logo.svg"
import { motion } from 'framer-motion'
import { formatPrice } from "src/utils/format"
import DropdownMenu from "src/shared/components/ui/DropdownMenu"

const StoreNavbar = () => {

    const {
        cart,
        user,
        theme,
        linkTo,
        setTheme,
        location,
        visibleMenu,
        visibleDropdown,
        changeVisibility,
        setVisibleDropdown
    } = useNavbar()

    return (
        <header className="sticky top-0 z-30 w-full shadow-lg">
            <nav className="w-full backdrop-blur-2xl bg-accent-dark">
                <div className="w-full lg:w-[80%] relative flex items-center justify-between mx-auto py-2 px-4 md:px-0">
                    <p className="text-inverse text-xs lg:text-sm">Lun. - Sab. 08:00 a.m - 07:00 p.m </p>
                    <div className="flex items-center gap-4">
                        <button className="self-center">
                            <i className="ri-customer-service-line text-inverse p-2 rounded-full text-xl" />
                        </button>
                        <div className="flex gap-x-5 lg:gap-x-10">
                            {/* <button onClick={() => setTheme(!theme)}>
                                <i className="ri-moon-line text-xl text-inverse" />
                            </button> */}
                            <button onClick={changeVisibility} className="block lg:hidden cursor-pointer">
                                <i className="ri-menu-3-fill text-2xl text-inverse" />
                            </button>
                            <StoreMobileMenu link={linkTo} visible={visibleMenu} />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full backdrop-blur-md bg-surface/80">
                <motion.nav
                    initial={{
                        translateX: -50,
                        opacity: 0
                    }}
                    animate={{
                        translateX: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: .2,
                    }}
                    viewport={{ once: true }}
                    className="w-11/12 lg:w-[80%] mx-auto flex justify-between items-center py-4 lg:py-6">
                    <Link to={'/'} className="flex items-center">
                        <img src={logo} alt="Todo terreno logo" className="h-6 md:h-10" />
                    </Link>
                    <div className="hidden lg:flex items-center">
                        <ul className="flex gap-x-12 items-center">
                            {
                                menu.map((item) => (
                                    <li className={`${location.pathname === item.to && 'bg-secondary/70 text-secondary-soft py-1 px-4 rounded-2xl'} self-center`} key={item.id}>
                                        <Link to={item.to}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-2 lg:gap-x-4">
                        {
                            user ? (
                                <div className="relative">
                                    <button onClick={() => setVisibleDropdown(!visibleDropdown)}>
                                        <i className="ri-user-line text-primary p-2 rounded-full hover:bg-line text-2xl" />
                                    </button>
                                    {
                                        visibleDropdown && (
                                            <div className="absolute bg-white border-line border shadow right-0 p-1 rounded-xl w-48">
                                                <Link to="/auth/perfil" className="hover:bg-primary-soft rounded-sm w-full text-nowrap px-2 py-1.5 text-sm block">Mi perfil</Link>
                                                <Link className="hover:bg-primary-soft rounded-sm w-full text-nowrap px-2 py-1.5 text-sm block"
                                                    to="/auth/ordenes"
                                                >Mis pedidos</Link>
                                                <button className="hover:bg-primary-soft rounded-sm w-full text-nowrap px-2 py-1.5 text-sm text-left">Cerrar sesión</button>
                                            </div>
                                        )
                                    }
                                </div>
                            ) : (

                                <Link to="/login" className="self-center">
                                    {
                                        <i className="ri-user-line text-accent-orange p-1 rounded-full hover:bg-surface-2 text-2xl" />
                                    }
                                </Link>
                            )
                        }

                        <Link to={'/carrito'} className="flex items-center justify-center gap-4">
                            <div className="relative">
                                <i className="ri-shopping-cart-line text-2xl font-medium p-2 lg:p-0" />
                                <div className="absolute text-inverse -right-2 -top-2 bg-secondary rounded-full text-xs text-center font-semibold w-5 h-5 pt-0.5">{cart?.total_items ?? 0}</div>
                            </div>
                            <div className="hidden md:flex flex-col items-start">
                                <p className="text-muted text-xs">Carrito de compras</p>
                                <p className="font-medium text-sm">{formatPrice(cart?.total)}</p>
                            </div>
                        </Link>
                    </div>
                </motion.nav>
            </div>
        </header>
    )

}

export default StoreNavbar