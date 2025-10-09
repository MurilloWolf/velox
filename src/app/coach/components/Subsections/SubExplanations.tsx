"use client";

export type SubsectionExplanationProps = {
  title: string;
  description: string;
  bullets?: string[];
};

export default function SubsectionExplanation({ title, description, bullets }: SubsectionExplanationProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_-20px_rgba(213,254,70,0.35)]">
      <h3 className="text-xl font-semibold text-[#d5fe46]">{title}</h3>
      <p className="text-sm text-white/85">{description}</p>
      {bullets && bullets.length > 0 ? (
        <ul className="list-disc space-y-2 pl-5 text-sm text-white/80">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
