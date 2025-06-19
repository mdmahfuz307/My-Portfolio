'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Code2, Home, FolderOpen, Github, ExternalLink } from 'lucide-react';

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Navbar = () => {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -20]);
  const headerOpacity = useTransform(scrollY, [0, 50, 100], [1, 0.8, 0.6]);

  return (
    <>
      {/* Desktop Navbar - Floating */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block fixed top-4 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl shadow-black/20 max-w-4xl mx-auto"
            whileHover={{ 
              borderColor: 'rgba(255, 255, 255, 0.15)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo/Name */}
            <Link href="/" className="group relative flex items-center gap-3 font-bold text-white">
              <motion.div 
                className="relative p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Code2 size={20} className="text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
              
              <div className="relative">
                <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                  Mahfuz Nirob
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-1">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 group"
              >
                <Home size={16} className="group-hover:scale-105 transition-transform" />
                <span className="font-medium text-sm">Home</span>
              </Link>
              
              <Link
                href="/projects"
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 group"
              >
                <FolderOpen size={16} className="group-hover:scale-105 transition-transform" />
                <span className="font-medium text-sm">Projects</span>
              </Link>
              
              <div className="w-px h-6 bg-white/10 mx-2" />
              
              <motion.a
                href="https://github.com/mdmahfuz307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="GitHub"
              >
                <Github size={16} className="group-hover:scale-105 transition-transform" />
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a
                href="https://twitter.com/mdmahfuz307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="X (Twitter)"
              >
                <XIcon size={16} className="group-hover:scale-105 transition-transform" />
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </nav>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Header - More Compact */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ y: headerY, opacity: headerOpacity }}
        transition={{ duration: 0.6 }}
        className="md:hidden sticky top-4 left-0 right-0 z-50 px-4"
      >
        <motion.div 
          className="bg-black/25 backdrop-blur-2xl border border-white/10 rounded-2xl px-3 py-2 shadow-lg shadow-black/20"
          whileHover={{ 
            borderColor: 'rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
          }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="group flex items-center justify-center">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="p-1.5 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300"
                whileHover={{ rotate: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Code2 size={16} className="text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
              
              <span className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                Mahfuz Nirob
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.header>

      {/* Enhanced Mobile Navbar - More Compact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:hidden fixed bottom-2 left-2 right-2 z-50"
      >
        <div className="bg-black/40 backdrop-blur-3xl border border-white/15 rounded-2xl px-1 py-1 shadow-xl shadow-black/30">
          <div className="flex items-center justify-between">
            {/* Home */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Link
                href="/"
                className="flex flex-col items-center justify-center py-2.5 px-1 text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Home size={18} className="relative group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-xs mt-1 font-medium">Home</span>
              </Link>
            </motion.div>
            
            {/* Projects */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Link
                href="/projects"
                className="flex flex-col items-center justify-center py-2.5 px-1 text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FolderOpen size={18} className="relative group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-xs mt-1 font-medium">Projects</span>
              </Link>
            </motion.div>
            
            {/* Divider */}
            <div className="h-6 w-px bg-white/10 mx-0.5" />
            
            {/* GitHub */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <a
                href="https://github.com/mdmahfuz307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2.5 px-1 text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 group"
                aria-label="GitHub"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Github size={18} className="relative group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-xs mt-1 font-medium">GitHub</span>
              </a>
            </motion.div>
            
            {/* X (Twitter) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <a
                href="https://twitter.com/mahfuznirob307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2.5 px-1 text-gray-400 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 group"
                aria-label="X (Twitter)"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <XIcon size={18} className="relative group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-xs mt-1 font-medium">X</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;