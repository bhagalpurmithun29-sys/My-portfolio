import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading, progress }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-container"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <div className="loader-glow" />
          
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              filter: 'blur(0px)',
              scale: 1,
              transition: { 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            style={{ 
              position: 'relative', 
              zIndex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center' 
            }}
          >
            <motion.h1 
              className="gradient-text" 
              style={{ 
                fontSize: '3.5rem', 
                fontWeight: 800, 
                marginBottom: '1.5rem',
                letterSpacing: '0.3em',
                textAlign: 'center'
              }}
            >
              MITHUN KUMAR
            </motion.h1>
            
            {/* Segmented Capsule Progress Bar */}
            <div style={{ 
              position: 'relative', 
              width: '350px', 
              height: '34px', 
              border: '2px solid var(--loader-track-border)', 
              borderRadius: '999px', 
              padding: '4px',
              display: 'flex',
              gap: '4px',
              overflow: 'hidden',
              marginBottom: '2rem',
              background: 'var(--loader-track-bg)',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)'
            }}>
              {/* Loop to create segments */}
              {[...Array(30)].map((_, i) => {
                const segmentProgress = (i / 30) * 100;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.1 }}
                    animate={{ 
                      opacity: progress >= segmentProgress ? 1 : 0.1,
                      background: progress >= segmentProgress ? 'var(--accent-blue)' : 'var(--loader-segment-off)',
                      boxShadow: progress >= segmentProgress ? '0 0 10px var(--accent-blue)' : 'none'
                    }}
                    style={{ 
                      flex: 1, 
                      height: '100%', 
                      borderRadius: '2px'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ position: 'relative' }}>
              <motion.div 
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  transition: { duration: 2, repeat: Infinity }
                }}
                style={{ 
                  fontSize: '0.8rem', 
                  color: 'var(--accent-blue)', 
                  letterSpacing: '0.5em', 
                  marginBottom: '0.5rem',
                  textTransform: 'lowercase',
                  opacity: 0.8
                }}
              >
                loading...
              </motion.div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '0.2rem' }}>
                <span style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 400, 
                  fontVariantNumeric: 'tabular-nums',
                  color: 'var(--text-primary)',
                }}>
                  {progress}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', fontWeight: 400, opacity: 0.6 }}>%</span>
              </div>
            </div>
          </motion.div>
          
          {/* Subtle particle background effect could be added here */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
