"use client";

export type HelloWorldSectionProps = {
  title: string;
  description: string;
};

export default function HelloWorldSection({ title, description }: HelloWorldSectionProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_-20px_rgba(213,254,70,0.35)]">
      <h3 className="text-xl font-semibold text-[#d5fe46]">{title}</h3>
      <p className="text-sm text-white/85">{description}</p>
    </section>
  );
}
