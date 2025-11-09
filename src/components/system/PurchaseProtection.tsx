"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { Button } from "@/components/ui";

interface PurchaseProtectionProps {
  isActive: boolean;
  onConfirmExit?: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  beforeUnloadMessage?: string;
}

export default function PurchaseProtection({
  isActive,
  onConfirmExit,
  title = "Compra em andamento",
  description = "Uma compra está sendo processada. Se você sair agora, o pagamento pode ser interrompido. Tem certeza que deseja continuar?",
  confirmText = "Sim, sair mesmo assim",
  cancelText = "Permanecer na página",
  beforeUnloadMessage = "Uma compra está sendo processada. Tem certeza que deseja sair?",
}: PurchaseProtectionProps) {
  const [showDialog, setShowDialog] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<
    (() => void) | null
  >(null);

  useEffect(() => {
    if (!isActive) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = beforeUnloadMessage;
      return beforeUnloadMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isActive, beforeUnloadMessage]);

  useEffect(() => {
    if (!isActive) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a[href]") as HTMLAnchorElement;

      if (link && link.href && !link.href.startsWith("javascript:")) {
        if (
          link.href.startsWith("http") &&
          !link.href.includes(window.location.hostname)
        ) {
          event.preventDefault();
          setPendingNavigation(
            () => () => window.open(link.href, link.target || "_self")
          );
          setShowDialog(true);
        }
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [isActive]);

  const handleConfirmExit = () => {
    setShowDialog(false);
    if (pendingNavigation) {
      pendingNavigation();
      setPendingNavigation(null);
    }
    onConfirmExit?.();
  };

  const handleCancelExit = () => {
    setShowDialog(false);
    setPendingNavigation(null);
  };

  if (!isActive) return null;

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent
        className="sm:max-w-md border-red-200 bg-red-50 text-red-900"
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-red-900 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.502 0L4.312 18.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            {title}
          </DialogTitle>
          <DialogDescription className="text-red-700">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 space-y-2 space-y-reverse sm:space-y-0 pt-4">
          <Button
            variant="outline"
            onClick={handleCancelExit}
            className="border-red-300 text-red-900 hover:bg-red-100"
          >
            {cancelText}
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirmExit}
            className="bg-red-600 hover:bg-red-700"
          >
            {confirmText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function usePurchaseProtection() {
  const [isProtected, setIsProtected] = useState(false);

  const enableProtection = () => setIsProtected(true);
  const disableProtection = () => setIsProtected(false);

  return {
    isProtected,
    enableProtection,
    disableProtection,
  };
}
