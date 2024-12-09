import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import surgeLogo from "../assets/images/surge-w.svg";

export function SplashScreen() {
  const imgRef = useRef(null);
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, ease: "bounce.out" }
    );

    const timer = setTimeout(() => {
      gsap.to(imgRef.current, { opacity: 0, scale: 0.5, duration: 1 });

      setTimeout(() => {
        setShowSplash(false);
        navigate("/login");
      }, 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!showSplash) return null;

  return (
    <div className="bg-zinc-950 flex w-full h-screen items-center justify-center">
      <img
        role="img"
        ref={imgRef}
        src={surgeLogo}
        alt="Surge logo"
        className="w-52 h-52"
      />
    </div>
  );
}
