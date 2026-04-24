import Section from "src/components/store-ui/Section"
import heroImage from '/public/hero-tire.webp'
import GlassEffect from "src/modules/store/home/components/GlassEffect"
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <Section densityY="large" className="relative">
            <GlassEffect />
            <div className="grid lg:grid-cols-2 gap-28 items-center w-full mx-auto">
                <motion.div
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-5 lg:gap-10">
                    <motion.h1
                        variants={{
                            hidden: { x: -100, opacity: 0 },
                            show: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: "tween",
                                    ease: "easeInOut",
                                    duration: 0.6,
                                },
                            },
                        }}
                        className="capitalize text-inverse text-4xl lg:text-6xl font-bold tracking-wide text-center lg:text-start">Las mejores {" "}
                        <span className="text-secondary">
                            llantas {" "}
                        </span>
                        para tu vehículo
                    </motion.h1>
                    <motion.p
                        variants={{
                            hidden: { x: -100, opacity: 0 },
                            show: {
                                x: 0,
                                opacity: 1,
                                transition: {
                                    type: "tween",
                                    ease: "easeInOut",
                                    duration: 0.6,
                                },
                            },
                        }}
                        className="text-lg lg:text-2xl font-light text-inverse text-center lg:text-start">Descubre nuestra selección de llantas premium de las mejores marcas mundiales. Rendimiento, seguridad y durabilidad garantizados.</motion.p>
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1
                        }}
                        transition={{
                            delay: 1
                        }}
                        className="w-fit flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center mx-auto lg:mx-0">
                        <div className="flex items-center justify-center gap-x-2 px-6 py-2 lg:py-1 rounded-full bg-surface shadow-lg text-sm lg:text-lg">
                            <i className="ri-flashlight-line text-xl lg:text-2xl font-medium text-secondary" />
                            <p className="text-sm font-semibold">
                                Compra rápida y segura
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-x-2 px-6 py-2 lg:py-1 rounded-full bg-surface shadow-lg text-sm lg:text-lg">
                            <i className="ri-shield-check-line text-xl lg:text-2xl font-medium text-secondary" />
                            <p className="text-sm font-semibold">
                                Pago 100% protegido
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="hidden lg:block mx-auto">
                    <div className="relative">
                        <div className="absolute inset-bg-linear-to-r from-primary/30 to-secondary-light/30 rounded-full blur-3xl opacity-50" />
                        <motion.img
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: .5
                            }}
                            src={heroImage} alt="hero tire" className="relative z-10 h-full max-w-lg mx-auto rounded-2xl shadow-2xl animate-[float-y_3.8s_ease-in-out_infinite]" />
                        <motion.div
                            initial={{
                                translateY: -100,
                                opacity: 0
                            }}
                            animate={{
                                translateY: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 1
                            }}
                            className="absolute top-5 -left-25 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-2 bg-surface z-10">
                            <div
                                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                <i className="ri-shield-check-line text-inverse text-lg" />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">Garantia</p>
                                <p className="font-light text-sm">5 años</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                translateX: 100,
                                opacity: 0
                            }}
                            animate={{
                                translateX: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 1
                            }}
                            className="absolute bottom-5 -right-25 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-2 bg-surface z-10">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                                <i className="ri-truck-line text-inverse text-lg" />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">Envíos</p>
                                <p className="font-light text-sm">Gratis</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section >
    )
}

export default Hero