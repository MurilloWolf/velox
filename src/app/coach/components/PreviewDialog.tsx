"use client";

import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";

type PreviewDialogSize = "default" | "compact";

interface PreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  description?: ReactNode;
  metadata?: ReactNode;
  previewContent?: ReactNode;
  actions?: ReactNode;
  contentClassName?: string;
  bodyClassName?: string;
  size?: PreviewDialogSize;
}

export default function PreviewDialog({
  open,
  onOpenChange,
  title,
  description,
  metadata,
  previewContent,
  actions,
  contentClassName,
  bodyClassName,
  size = "default",
}: PreviewDialogProps) {
  const sizeClasses =
    size === "compact"
      ? "sm:max-w-lg px-5 py-6"
      : "sm:max-w-xl px-6 py-6";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "glass-scrollbar max-h-[80vh] w-full max-w-[min(90vw,36rem)] overflow-y-auto overflow-x-hidden border-[#1b2b44] bg-[#040b19] text-slate-100",
          sizeClasses,
          contentClassName
        )}
      >
        <DialogHeader>
          {title ? <DialogTitle>{title}</DialogTitle> : null}
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>
        <div className={cn("space-y-4", bodyClassName)}>
          {metadata}
          {previewContent}
          {actions}
        </div>
      </DialogContent>
    </Dialog>
  );
}
