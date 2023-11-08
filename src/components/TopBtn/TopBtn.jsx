import  { useState, useEffect } from 'react';
import styles from './TopBtn.module.css';

const TopBtn = () => {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  const checkScrollHeight = () => {
    if (window.scrollY > 400) {
      setIsScrollButtonVisible(true);
    } else {
      setIsScrollButtonVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`${styles.btn} ${isScrollButtonVisible ? styles.isScrollButtonVisible : ''}`}
      onClick={scrollToTop}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#131212"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </div>
  );
};

export default TopBtn;
