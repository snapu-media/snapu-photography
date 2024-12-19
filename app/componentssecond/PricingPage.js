'use client';
import React, { useEffect, useRef, useState } from "react";
import styles from './PricingPage.module.css';

export default function PricingPage() {
  const cardsContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const cardsContainer = cardsContainerRef.current;
    const overlay = overlayRef.current;

    const applyOverlayMask = (e) => {
      if (!cardsContainer || !overlay) return;

      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;

      overlay.style.setProperty('--x', `${x}px`);
      overlay.style.setProperty('--y', `${y}px`);
      overlay.style.setProperty('--opacity', 1);
    };

    const resetOverlayMask = () => {
      if (overlay) {
        overlay.style.setProperty('--opacity', 0);
      }
    };

    // Add event listeners only on the client side
    if (cardsContainer) {
      cardsContainer.addEventListener('mousemove', applyOverlayMask);
      cardsContainer.addEventListener('mouseleave', resetOverlayMask);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener('mousemove', applyOverlayMask);
        cardsContainer.removeEventListener('mouseleave', resetOverlayMask);
      }
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className={styles['pricing-page']}>
      <main className={styles.main}>
        <h1 className={styles.main__heading}>Pricing</h1>
        <div className={styles.cards} ref={cardsContainerRef}>
          <div className={styles.cards__inner}>
            <div className={styles.card}>
              <h2 className={styles.card__heading}>Basic Plan</h2>
              <p className={styles.card__price}>$19/month</p>
              <ul className={styles.card__bullets}>
                <li>Feature 1</li>
                <li>Feature 2</li>
              </ul>
              <a href="#" className={styles.cta}>Choose Plan</a>
            </div>
            <div className={styles.card}>
              <h2 className={styles.card__heading}>Premium Plan</h2>
              <p className={styles.card__price}>$39/month</p>
              <ul className={styles.card__bullets}>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <a href="#" className={styles.cta}>Choose Plan</a>
            </div>
            <div className={styles.card}>
              <h2 className={styles.card__heading}>Enterprise Plan</h2>
              <p className={styles.card__price}>$99/month</p>
              <ul className={styles.card__bullets}>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
              <a href="#" className={styles.cta}>Choose Plan</a>
            </div>
          </div>
        </div>
        <div ref={overlayRef} className={styles.overlay}></div>
      </main>
    </div>
  );
}
