import { Card } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import runningBg from "../../../../../public/running-bg.jpg";

export interface IFeatureProps {
  feature: {
    title: string;
    description: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    img: StaticImageData;
  };
  index: number;
  scrollNext: () => void;
  showScroll: boolean;
  onSelect: () => void;
}

export default function FeatureCard(props: IFeatureProps) {
  const { feature, index, scrollNext, showScroll, onSelect } = props;
  const Icon = feature.icon;
  return (
    <Card
      key={index}
      className="hover:scale-110 cursor-pointer gap-0 snap-center flex-shrink-0 w-[calc(100vw-6vw)] sm:w-[calc(80vw)] md:w-1/4 md:min-h-[500px] md:h-[600px] md:min-w-[320px] lg:min-w-[360px] h-[calc(100vh-1rem)] sm:h-[520px] overflow-hidden rounded-3xl transition-all duration-150 border-0 bg-transparent mx-2"
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
    >
      <div className={`relative h-[80%] flex items-end p-6 rounded-t-2xl`}>
        <Image
          src={feature.img || runningBg}
          className="absolute inset-0 object-cover w-full h-full rounded-t-2xl opacity-60"
          alt={feature.title}
        />
        <div
          role="button"
          tabIndex={0}
          onClick={(event) => {
            event.stopPropagation();
            scrollNext();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              scrollNext();
            }
          }}
          className={`block sm:hidden absolute right-6 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-500 ${
            showScroll ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!showScroll}
          aria-label="Ver mais recursos"
        >
          <div className="flex items-center space-x-1">
            {[0, 1, 2].map((i) => (
              <ChevronRight
                key={i}
                size={32}
                className="text-white/90 animate-bounce font-bold"
                style={{ animationDelay: `${i * 160}ms` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute top-5 left-5 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-white/20 backdrop-blur">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-white text-3xl font-extrabold z-10 ml-4">
          {feature.title}
        </h3>
      </div>
      <div className="h-[20%] sm:h-min-48 overflow-hidden p-6 bg-white/10 rounded-b-2xl backdrop-blur-md border border-white/10 shadow-lg">
        <p className="text-base md:text-sm text-white/85 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </Card>
  );
}
