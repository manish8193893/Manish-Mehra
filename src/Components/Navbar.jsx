import { useState, useEffect } from 'react';
import { Github, Mail, Menu, MessagesSquare, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-crypto-blue/80 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="logo.png" width={88} height={25} alt="logo" />
          </Link>
        </div>

        
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a href="/" className="text-gray-300 py-2 px-3 navbar-border rounded-md transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 py-2 px-3 navbar-border rounded-md transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="text-gray-300 py-2 px-3 navbar-border rounded-md transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="/resume" className="text-gray-300 py-2 px-3 navbar-border rounded-md transition-colors">
              Resume
            </a>
          </li>
        </ul>

        <div className="hidden lg:flex items-center space-x-4 px-5">
          <ul className="flex items-center space-x-2">
            <li className='p-2 border-gray-700 hover:bg-white/20 rounded-md'>
              <a className="text-gray-300 transition-colors rounded-md border-b-2 border-transparent hover:border-white pb-1" href="tel:+918742970516">
                <Phone />
              </a>
            </li>
            <li className='p-2 border-gray-700 hover:bg-white/20 rounded-md'>
              <a className="text-gray-300 transition-colors rounded-md border-b-2 border-transparent hover:border-white pb-1" href="mailto:manish8193892@gmail.com">
                <Mail />
              </a>
            </li>
            <li className='p-2 border-gray-700 hover:bg-white/20 rounded-md'>
              <a className="text-gray-300 transition-colors rounded-md border-b-2 border-transparent hover:border-white pb-1" href="https://wa.me/+918742970516">
                <MessagesSquare />
              </a>
            </li>
            <li className='p-2 border-gray-700 hover:bg-white/20 rounded-md'>
              <a className="text-gray-300 transition-colors rounded-md border-b-2 border-transparent hover:border-white pb-1" href="https://github.com/manish8193893">
                <Github />
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-crypto-blue/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-lg">
          <div className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors block " onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors block " onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors block " onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li className='border-b-2 border-gray-700'>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors block pb-2" onClick={() => setIsMobileMenuOpen(false)}>
                  Resume
                </a>
              </li>
              <li className="flex flex-row">
                <Link className='p-2 mr-2 border-gray-700 hover:bg-white/20 rounded-md' to="tel:+918742970516">
                  <a className="text-gray-300 transition-colors rounded-md">
                    <Phone />
                  </a>
                </Link>
                <Link className='p-2 mx-2 border-gray-700 hover:bg-white/20 rounded-md' to="mailto:manish8193892@gmail.com">
                  <a className="text-gray-300 transition-colors rounded-md">
                    <Mail />
                  </a>
                </Link>
                <Link className='p-2 mx-2 border-gray-700 hover:bg-white/20 rounded-md' to="https://wa.me/+918742970516">
                  <a className="text-gray-300 transition-colors rounded-md">
                    <MessagesSquare />
                  </a>
                </Link>
                <Link className='p-2 mx-2 border-gray-700 hover:bg-white/20 rounded-md' to="https://github.com/manish8193893">
                  <a className="text-gray-300 transition-colors rounded-md">
                    <Github />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
