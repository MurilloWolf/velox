"use client";
import Image from "next/image";

export type HelloWorldSectionProps = {
  title: string;
  description: string;
};

export default function HelloWorldSection({
  title,
  description,
}: HelloWorldSectionProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_-20px_rgba(213,254,70,0.35)]">
      <h3 className="text-xl font-semibold text-[#d5fe46]">{title}</h3>
      <p className="text-sm text-white/85">{description}</p>
      <Image
        width={400}
        height={400}
        src="https://imgs.search.brave.com/R93HLwjf4AMPKzrj-19KK8rYEeDQLE38eh6sTDfTmpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTUw/MDE5NTA4L3Bob3Rv/L21hcmF0aG9uLXJ1/bm5pbmcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXVhMU1E/TWEzTVRLSTlXNlpG/dlhIYnBheVlBQzZ5/RVRKNDNZYTlrU290/c1E9"
        alt="img"
      />
    </section>
  );
}
