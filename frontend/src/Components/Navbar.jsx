import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { name: "Recipe", path: "/recipe" },
    { name: "Workouts", path: "/workoutssection" },
    { name: "Personal Training", path: "/personaltraining" },
    { name: "Mental Wellness", path: "/mentalwellness" },
    { name: "Nutrition Counseling", path: "/nutritioncounseling" },
    { name: "Energy Foods", path: "/energyfoods" },
    { name: "Healthy Foods", path: "/foods-section" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
    setMenuOpen(false);
  };

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full h-20 px-6 md:px-12 bg-white/90 backdrop-blur-sm shadow-md z-50 flex items-center justify-between"
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-green-600">
        <h3>HealthLife</h3>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium relative">
        <Link to="/" className="hover:text-green-600 transition">Home</Link>
        <Link to="/blog" className="hover:text-green-600 transition">Blog</Link>

        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="bg-green-100 text-green-900 px-4 py-2 rounded-full shadow-sm text-sm flex items-center gap-1"
          >
            Explore Services <ChevronDown size={16} />
          </button>

          {dropdownOpen && (
            <div className="absolute top-12 left-0 bg-white shadow-lg rounded-md overflow-hidden z-50">
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => handleNavigate(service.path)}
                  className="w-full text-left px-4 py-2 hover:bg-green-100 text-sm"
                >
                  {service.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <Link to="/aboutussection" className="hover:text-green-600 transition">About</Link>
        <Link to="/contactussection" className="hover:text-green-600 transition">Contact</Link>
        <Link to="/privacy" className="hover:text-green-600 transition">Privacy</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={handleToggleMenu}
        className="md:hidden text-green-600 transition z-50"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-3/4 max-w-xs h-screen bg-white shadow-lg flex flex-col px-8 py-20 gap-6 z-40 text-gray-700"
          >
            <Link to="/" onClick={handleToggleMenu} className="hover:text-green-600 text-lg">Home</Link>
            <Link to="/blog" onClick={handleToggleMenu} className="hover:text-green-600 text-lg">Blog</Link>

            {/* Mobile Dropdown Toggle */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 text-lg font-medium text-left hover:text-green-600"
              >
                Explore Services <ChevronDown size={18} />
              </button>
              {mobileDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => handleNavigate(service.path)}
                      className="block text-left text-md hover:text-green-600"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/aboutussection" onClick={handleToggleMenu} className="hover:text-green-600 text-lg">About</Link>
            <Link to="/contactussection" onClick={handleToggleMenu} className="hover:text-green-600 text-lg">Contact</Link>
            <Link to="/privacy" onClick={handleToggleMenu} className="hover:text-green-600 text-lg">Privacy</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
