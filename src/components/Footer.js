import React from 'react';
import { Mail, Instagram, Twitter, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Informasi Kontak */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <a href="mailto:info@smartcity.com" className="flex items-center text-blue-200 hover:text-white transition duration-300">
              <Mail className="mr-2" size={20} />
              <span>info@smartcity.com</span>
            </a>
          </div>

          {/* Ikuti Kami */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex flex-col space-y-2">
              <a href="https://github.com/Rizki-Fik1" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-200 hover:text-white transition duration-300">
                <Github size={20} className="mr-2" />
                <span>Rizki-Fik1</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright dan Hak Cipta */}
        <div className="mt-6 text-center">
          <p className="text-sm text-blue-100">© 2024 Smart City Project</p>
          <p className="text-sm mt-1 text-blue-200 italic">"#Keep smart and keep working"</p>
          <p className="text-sm mt-1 text-blue-200 italic">Project by Rizki Fiko</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;