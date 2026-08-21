import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  });

  const [type, setType] = useState('default');

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const detectTarget = (event) => {
      const target = event.target.closest('[data-cursor]');

      setType(target?.dataset.cursor || 'default');
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', detectTarget);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', detectTarget);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`custom-cursor cursor-${type}`}
      style={{ x, y }}
    >
      {type === 'default' && (
        <div className="cursor-default-paint">
          <div className="cursor-roller-mini">
            <span />
          </div>
          <div className="cursor-orbit-dot" />
        </div>
      )}

      {type === 'products' && (
        <div className="cursor-products-paint">
          <div className="mini-roller">
            <div className="mini-roller-head" />
            <div className="mini-roller-handle" />
          </div>

          <div className="paint-trail">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      {type === 'about' && (
        <motion.div
          className="cursor-paint-blob"
          animate={{
            scale: [1, 1.12, 1],
            rotate: [0, 8, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span />
        </motion.div>
      )}

      {type === 'contact' && (
        <div className="cursor-contact-paint">
          <span>LET'S TALK</span>
        </div>
      )}

      {type === 'dealer' && (
        <div className="cursor-dealer-paint">
          <span>→</span>
        </div>
      )}
    </motion.div>
  );
}