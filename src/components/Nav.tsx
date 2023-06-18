import { motion } from "framer-motion"
import { useState } from "react"

const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.14
        }
    },
    hidden: {
        opacity: 0
    }
}

const itemMotion = {
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: -100}
}

const itemMotionDesktop = {
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 1, x: 0}
}

const navLinks = [
    {name: "Home", href: "/", id: 1},
    // {name: "Gallery", href: "#gallery", id: 2},
    {name: "About", href: "/about", id: 2},
]

const NavLinks = ({isMobile, className}: {isMobile: boolean, className: string}) => (
    <div className={className}>
        {navLinks.map(({name, href, id}) => (
            <motion.a
                key={id}
                variants={isMobile ? itemMotion : itemMotionDesktop}
                href={href}
            >
                {name}
            </motion.a>
        ))}
    </div>
)

const Nav = () => {
    const [toggled, setToggled] = useState(false);
    return (
        <nav className="relative mx-8 md:mx-16 lg:mx-32  flex items-center justify-between pb-4 pt-6 font-medium">
            <svg
                className="absolute bottom-0 right-0 hidden lg:block"
                width="150"
                height="4"
                viewBox="0 0 250 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    animate={{ pathLength: 1, opacity: 1 }}
                    initial={{ pathLength: 0, opacity: 0 }}
                    transition={{ delay: 1, duration: 0.75 }}
                    d="M2 2L428 1.99996"
                    stroke="#282828"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>

            

            <h1 className="text-lg font-bold">
                <a href="/">Anas' Art.</a>
            </h1>

            {toggled && (
                <motion.div
                    variants={navMotion}
                    animate="visible"
                    initial="hidden"
                    className="fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-24 bg-white text-2xl font-bold"
                >
                    <NavLinks className="flex flex-col gap-24 text-lg" isMobile={true} />
                </motion.div>
            )}

            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 25 }}
                transition={{ delay: 0.35 }}
                className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg"
            >
                <NavLinks className="flex gap-12" isMobile={false} />
            </motion.div>

            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 25 }}
                transition={{ delay: 0.35 }}
                onClick={() => setToggled((prevToggle) => !prevToggle)}
                className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden`}
            >
                <motion.span
                    animate={{rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0}}
                    className="line-1 block h-0.5 w-8 bg-black"
                ></motion.span>
                <motion.span
                    animate={{width: toggled ? 0 : 24}}
                    className="line-2 block h-0.5 w-6 bg-black"
                ></motion.span>
                <motion.span
                    animate={{rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0, width: toggled ? 32 : 16}}
                    className="line-3 block h-0.5  bg-black"
                ></motion.span>
            </motion.div>
        </nav>
    )
}

export default Nav