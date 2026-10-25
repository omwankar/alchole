import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Seo title="Page not found" description="This page is not in the West Ford house." path={location.pathname} />
      <div className="flex min-h-[70vh] items-center justify-center px-8">
        <div className="text-center">
          <h1 className="mb-4 text-5xl text-primary">404</h1>
          <p className="mb-8 text-lg text-muted-foreground">This room does not exist.</p>
          <Link to="/" className="text-primary underline-offset-4 hover:underline">
            Return home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
