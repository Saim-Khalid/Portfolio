import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="grid-backdrop" aria-hidden="true" />
      <div className="text-center">
        <p className="mb-4 font-pixel text-xs uppercase text-primary">[error] // route_not_found</p>
        <h1 className="mb-4 text-7xl font-bold text-gradient md:text-8xl">404</h1>
        <p className="mb-8 font-mono text-muted-foreground">
          <span className="text-primary">❯</span> this page drifted out of the latent space
        </p>
        <a href="/" className="btn-glow">
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
