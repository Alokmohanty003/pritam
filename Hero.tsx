"use client"; // Add this directive to enable client-side features

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation
import styles from '../Style/Hero.module.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    // Perform any necessary email validation here

    // Redirect to a new page
    router.push('ThankYou/'); // Ensure this matches your actual route
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}></div>
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex items-center justify-between">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl after:absolute after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl before:content-[''] after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      </div>
      <h1 className={styles.title}>Discover a New Era of Luxurious Fashion</h1>
      <p className={styles.description}>
        Welcome to the epitome of luxury and sophistication. Our exclusive collection embodies the perfect blend of timeless elegance and contemporary style.
      </p>
      <form className={styles.emailForm} onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className={styles.emailInput} 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <button type="submit" className={styles.submitButton}>➜</button>
      </form>
    </section>
  );
};

export default Hero;
