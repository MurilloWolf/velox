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
import PurchaseProtection from "@/components/system/PurchaseProtection";

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
  isPurchaseInProgress?: boolean;
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
  isPurchaseInProgress = false,
}: PurchaseDialogProps) {
  const sizeClasses = {
    compact: "sm:max-w-lg p-2 py-6 sm:px-5 sm:py-6",
    default: "sm:max-w-xl p-2 py-6 sm:px-6 sm:py-6",
    large: "sm:max-w-5xl p-2 py-6 sm:px-6 sm:py-6",
  }[size];

  const shouldBlockClose = blockClose || isPurchaseInProgress;

  useEffect(() => {
    if (!shouldBlockClose) return;

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
  }, [shouldBlockClose]);

  const handleOpenChange = (newOpen: boolean) => {
    if (shouldBlockClose && !newOpen) {
      return;
    }
    onOpenChange(newOpen);
  };

  console.log("isPurchaseInProgress:", isPurchaseInProgress);

  return (
    <>
      <PurchaseProtection isActive={isPurchaseInProgress} />

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className={cn(
            "glass-scrollbar max-h-[85vh] w-full overflow-y-auto overflow-x-hidden border-none bg-black/75  text-slate-100",
            sizeClasses,
            contentClassName
          )}
          showCloseButton={!shouldBlockClose}
          onPointerDownOutside={(e) => {
            if (shouldBlockClose) {
              e.preventDefault();
            }
          }}
          onInteractOutside={(e) => {
            if (shouldBlockClose) {
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
    </>
  );
}
