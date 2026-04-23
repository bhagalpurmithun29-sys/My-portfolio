import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Sidebar = () => {
  const contactItems = [
    { icon: <Github size={30} />, href: 'https://github.com', label: 'GitHub', external: true },
    { icon: <Linkedin size={30} />, href: 'https://linkedin.com', label: 'LinkedIn', external: true },
    { icon: <Mail size={30} />, href: 'mailto:bhagalpur.mithun.29@gmail.com', label: 'Email', external: false },
    { icon: <FileText size={30} />, href: '#resume', label: 'Resume', external: false },
  ];

  return (
    <aside className="sidebar contact-sidebar">
      {contactItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="sidebar-contact-icon"
          aria-label={item.label}
          title={item.label}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
        >
          {item.icon}
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;
