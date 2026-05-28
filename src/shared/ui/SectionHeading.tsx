type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {kicker ? <p className="section-heading__kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
