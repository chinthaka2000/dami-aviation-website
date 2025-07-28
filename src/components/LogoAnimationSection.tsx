import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LogoAnimationSection = () => {
  const logoAnimation = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoAnimation.current) {
      const anim = lottie.loadAnimation({
        container: logoAnimation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'logoanimation.json' //logo animation animation
      });
      return () => anim.destroy();
    }
  }, []);


};

export default LogoAnimationSection;