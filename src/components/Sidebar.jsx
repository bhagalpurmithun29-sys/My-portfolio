import React from 'react';
import { Home, User, Code2, FolderRoot, FileText, Mail, Moon, Sun, BrainCircuit } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <Home size={24} />, id: 'home' },
    { icon: <User size={24} />, id: 'about' },
    { icon: <Code2 size={24} />, id: 'skills' },
    { icon: <FolderRoot size={24} />, id: 'projects' },
    { icon: <FileText size={24} />, id: 'resume' },
    { icon: <Mail size={24} />, id: 'contact' },
  ];

  return (
    <aside className="sidebar glass">
      <div className="logo-section" style={{ marginBottom: 'auto', padding: '1rem' }}>
        <div style={{ 
          width: '44px', 
          height: '44px', 
          background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', 
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)'
        }}>
          <BrainCircuit color="white" size={24} />
        </div>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="nav-icon">
            {item.icon}
          </a>
        ))}
      </nav>

      <div className="theme-toggle" style={{ marginTop: 'auto' }}>
        <button className="nav-icon" style={{ border: 'none', background: 'none' }}>
          <Moon size={24} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
