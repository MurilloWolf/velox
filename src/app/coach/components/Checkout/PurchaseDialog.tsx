"use client";

import { ReactNode, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";

type PurchaseDialogSize = "default" | "compact" | "large";

interface PurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  description?: ReactNode;
  metadata?: ReactNode;
  children?: ReactNode;
  contentClassName?: string;
  bodyClassName?: string;
  size?: PurchaseDialogSize;
  blockClose?: boolean;
}

export default function PurchaseDialog({
  open,
  onOpenChange,
  title,
  description,
  metadata,
  children,
  contentClassName,
  bodyClassName,
  size = "default",
  blockClose = false,
}: PurchaseDialogProps) {
  const sizeClasses = {
    compact: "sm:max-w-lg px-5 py-6",
    default: "sm:max-w-xl px-6 py-6",
    large: "sm:max-w-5xl px-6 py-6",
  }[size];

  useEffect(() => {
    if (!blockClose) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [blockClose]);

  const handleOpenChange = (newOpen: boolean) => {
    if (blockClose && !newOpen) {
      return;
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "glass-scrollbar max-h-[85vh] w-full overflow-y-auto overflow-x-hidden border-none bg-black/75  text-slate-100",
          sizeClasses,
          contentClassName
        )}
        onPointerDownOutside={(e) => {
          if (blockClose) {
            e.preventDefault();
          }
        }}
        onInteractOutside={(e) => {
          if (blockClose) {
            e.preventDefault();
          }
        }}
      >
        <DialogHeader>
          {title ? (
            <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
          ) : null}
          {description ? (
            <DialogDescription className="text-slate-300">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>
        <div className={cn("space-y-6", bodyClassName)}>
          {metadata}
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
