import type { ReactNode } from "react";
import { business } from "@/data/business";

/** Every tel: link goes through this, so the number lives in one place (business.ts). */
export function PhoneLink({ className, children }: { className?: string; children?: ReactNode }) {
  if (!business.phoneTel) return null;
  return (
    <a href={`tel:${business.phoneTel}`} className={className}>
      {children ?? business.phoneDisplay}
    </a>
  );
}
