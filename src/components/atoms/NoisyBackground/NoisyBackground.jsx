import React, { useEffect } from 'react';

const NoisyBackground = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const totalDots = canvas.width * canvas.height * 1;

    for (let i = 0; i < totalDots; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`;
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        1,
        1
      );
    }

    const notFound = document.querySelector('.notfound');

    notFound.style.backgroundImage = `url(${canvas.toDataURL()})`;
    notFound.style.backgroundRepeat = 'no-repeat';
    notFound.style.backgroundSize = 'cover';
  }, []);
  return null;
};

export default NoisyBackground;
