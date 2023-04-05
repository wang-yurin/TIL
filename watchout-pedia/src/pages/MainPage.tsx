import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slider from '../components/Slider';
import LatestMovieSection from '../features/movie/latest';

export default function MainPage() {
  return (
    <>
      <Header />
      <LatestMovieSection />
      <Slider />
      <Footer />
    </>
  );
}
