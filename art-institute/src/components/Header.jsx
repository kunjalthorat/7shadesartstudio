import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import logo from "../assets/logo_nobg.png"

const navItems = ["Home", "Gallery", "Courses", "About", "Contact"]

export default function Header() {

  /* ---------------------------------- */
  /* INFO ITEMS */
  /* ---------------------------------- */
  const infoItems = [
    { icon: <FaPhoneAlt />, text: "+91 98765 43210" },
    { icon: <FaWhatsapp />, text: "WhatsApp: +91 98765 43210" },
    { icon: <FaMapMarkerAlt />, text: "Punawale, Pune, Maharashtra" },
  ]

  const { scrollY } = useScroll()
  const navigate = useNavigate()
  const location = useLocation()

  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const isContactPage = location.pathname === "/contact"
  const isGalleryPage = location.pathname === "/gallery"
  const isCoursesMainPage = location.pathname === "/courses-main"
  const isAboutPage = location.pathname === "/about"

  const isPrimaryBgPage =
    isContactPage || isGalleryPage || isCoursesMainPage || isAboutPage

  const getActiveTab = () => {
    if (location.pathname === "/" || location.pathname === "") return "Home"
    if (isGalleryPage) return "Gallery"
    if (isCoursesMainPage) return "Courses"
    if (location.pathname === "/about") return "About"
    if (isContactPage) return "Contact"
    return null
  }

  const activeTab = getActiveTab()

  const handleNavClick = (item) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const routes = {
      Home: "/",
      Gallery: "/gallery",
      Courses: "/courses-main",
      About: "/about",
      Contact: "/contact",
    }
    navigate(routes[item] || "/")
  }

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious()
      setHidden(latest > previous && latest > 80)
      setScrolled(latest > 50)
    })
  }, [scrollY])

  return (
    <>
      {/* ================================================= */}
      {/* TOP INFO BAR */}
      {/* ================================================= */}

      <div
        className="fixed top-0 left-0 w-full z-[60]
  bg-gradient-to-r from-[#1F5C8C] via-[#2F7BC1] to-[#0F2A44]
  text-white"
      >
        <div
          className="max-w-7xl mx-auto
    flex flex-col md:flex-row
    items-center justify-between
    gap-1 md:gap-0
    px-4 py-1 text-xs md:text-sm"
        >

          {/* LEFT TEXT */}
          <div className="font-medium tracking-wide">
            Welcome to 7 Shades Art Studio
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6 font-medium">

            {/* Phone 1 */}
            <a
              href="tel:8390493388"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <FaPhoneAlt className="text-sm" />
              <span>8390493388</span>
            </a>

            {/* Phone 2 */}
            <a
              href="tel:9168278222"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <FaPhoneAlt className="text-sm" />
              <span>9168278222</span>
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 text-base">

              <a
                href="https://www.facebook.com/Ompaitingclasses/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/7_shades_art_studio/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@7shadesartstudio875"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>
      </div>



      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <motion.header
        initial={false}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-[28px] left-0 w-full z-50 transition-colors duration-300
    ${isPrimaryBgPage
            ? "bg-[#1F5C8C] text-white"
            : "bg-white text-black shadow-sm"
          }
  `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-1">

          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick("Home")}
          >
            <img
              src={logo}
              alt="7 Shades Art Studio Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="tracking-wide text-sm md:text-xl font-medium">
              7 Shades Art Studio
            </span>
          </div>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center space-x-10 text-base">
            {navItems.map((item) => (
              <li
                key={item}
                className={`relative group cursor-pointer font-semibold
          ${item === activeTab ? "underline underline-offset-4" : ""}`}
                onClick={() => handleNavClick(item)}
              >
                {item}
                {item !== activeTab && (
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full" />
                )}
              </li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <button
            className="cursor-pointer md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-7 h-[2px] bg-current" />
            <span className="w-7 h-[2px] bg-current" />
            <span className="w-7 h-[2px] bg-current" />
          </button>

        </div>
      </motion.header>

      {/* ================================================= */}
      {/* MOBILE MENU */}
      {/* ================================================= */}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-full h-screen bg-black text-white z-[70]
             flex flex-col justify-center items-center space-y-10 text-4xl"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer absolute top-6 right-8 text-2xl"
        >
          ✕
        </button>

        {navItems.map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:opacity-70 transition font-medium"
            onClick={() => {
              handleNavClick(item)
              setMenuOpen(false)
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>

    </>
  )
}
