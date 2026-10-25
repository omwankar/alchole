import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { readAgeChoice, writeAgeChoice } from "@/lib/age-gate";

export const AgeGate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/under-age") {
      setOpen(false);
      return;
    }
    const choice = readAgeChoice();
    if (choice === "yes") {
      setOpen(false);
      return;
    }
    if (choice === "no") {
      navigate("/under-age", { replace: true });
      return;
    }
    setOpen(true);
  }, [location.pathname, navigate]);

  const confirm = () => {
    writeAgeChoice("yes");
    setOpen(false);
  };

  const decline = () => {
    writeAgeChoice("no");
    setOpen(false);
    navigate("/under-age");
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="border-primary/40 bg-background sm:rounded-lg [&>button]:hidden"
        onPointerDownOutside={(event) => event.preventDefault()}
        onEscapeKeyDown={(event) => event.preventDefault()}
        onInteractOutside={(event) => event.preventDefault()}
      >
        <DialogHeader className="space-y-4 text-center sm:text-center">
          <div className="gold-divider" />
          <DialogTitle className="font-display text-3xl text-foreground">
            Welcome to West Ford
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-muted-foreground">
            Please confirm you are of legal drinking age.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            className="bg-primary text-primary-foreground hover-glow-gold hover:bg-primary/90"
            onClick={confirm}
          >
            I am of legal age
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={decline}
          >
            I am not
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Please drink responsibly.
        </p>
      </DialogContent>
    </Dialog>
  );
};
