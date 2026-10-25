import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";

interface LegalPageProps {
  title: string;
  path: string;
  children: ReactNode;
}

export const LegalPage = ({ title, path, children }: LegalPageProps) => (
  <Layout>
    <Seo title={title} description={`${title} for West Ford.`} path={path} />
    <article className="site-container max-w-3xl py-32">
      <h1 className="mb-8 text-4xl text-primary">{title}</h1>
      <div className="gold-divider mx-0 mb-8" />
      <div className="space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </article>
  </Layout>
);

export const Privacy = () => (
  <LegalPage title="Privacy" path="/privacy">
    <p>
      We collect only what is required to answer an enquiry, maintain the Reserve List, or complete a sale. We do not
      sell personal information. Correspondence is kept as long as the relationship requires, then removed.
    </p>
  </LegalPage>
);

export const Terms = () => (
  <LegalPage title="Terms" path="/terms">
    <p>
      Bottles and cask interests are offered to those of legal drinking age in their jurisdiction. Descriptions are
      made in good faith. Cask contracts are separate instruments and supersede retail terms where they differ.
    </p>
  </LegalPage>
);

export const ResponsibleDrinking = () => (
  <LegalPage title="Responsible Drinking" path="/responsible-drinking">
    <p>
      West Ford exists for those who drink rarely and well. Please enjoy in moderation. If alcohol is a difficulty for
      you, we ask that you leave this site. Help is available from local health services.
    </p>
    <p>Please drink responsibly. Must be of legal drinking age.</p>
  </LegalPage>
);

export const UnderAge = () => (
  <LegalPage title="A quiet door" path="/under-age">
    <p>
      Thank you for your honesty. West Ford is reserved for those of legal drinking age. We wish you well, and we will
      be here when the years have done their work.
    </p>
  </LegalPage>
);
