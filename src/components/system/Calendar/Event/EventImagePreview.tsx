import Image from "next/image";
import { Badge } from "@/components/ui";
import { Calendar, Clock } from "lucide-react";

interface EventImagePreviewProps {
  title: string;
  image: string | undefined;
  formattedDate: string | undefined;
  time: string | undefined;
}

const InfoBadge = ({
  formattedDate,
  time,
}: {
  formattedDate: string | undefined;
  time: string | undefined;
}) => (
  <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
    <Badge className="flex items-center gap-2 text-md text-white bg-white/5 px-3 py-1.5 rounded-lg w-max">
      <Calendar className="h-4 w-4" />
      <span className="capitalize">{formattedDate}</span>
    </Badge>
    <Badge className="flex items-center gap-2 text-md text-white bg-white/5 px-3 py-1.5 rounded-lg w-max">
      <Clock className="h-6 w-6" />
      {time}
    </Badge>
  </div>
);

export default function EventImagePreview({
  image,
  formattedDate,
  time,
  title,
}: EventImagePreviewProps) {
  return (
    <>
      {image ? (
        <div className="relative h-64 lg:h-full">
          <Image
            src={image}
            alt={`Imagem promocional - ${title}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <InfoBadge formattedDate={formattedDate} time={time} />
        </div>
      ) : (
        <div className="h-64 lg:h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
          <div className="text-center text-white/50">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <p>Sem imagem disponível</p>
          </div>
          <InfoBadge formattedDate={formattedDate} time={time} />
        </div>
      )}
    </>
  );
}
