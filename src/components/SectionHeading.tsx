interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-16 max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-primary/80">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl font-bold text-primary md:text-5xl">{title}</h2>
      <div className={`mt-6 h-px w-6 bg-primary/80 ${align === "center" ? "mx-auto" : ""}`} />
      {description ? (
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
};
