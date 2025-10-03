"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

export function CopyButton({ textToCopy, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Button
      variant="ghost"
      onClick={handleCopy}
      className={
        className ||
        "absolute top-4 right-4 text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded"
      }
    >
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
}
