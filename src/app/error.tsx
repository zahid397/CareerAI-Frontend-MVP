"use client";
import { EmptyState, Button } from "@/components/ui/primitives";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <EmptyState
      title="Let’s get you moving again"
      description="This page had a problem loading. Try again to restore the view."
    >
      <Button onClick={reset}>Try again</Button>
    </EmptyState>
  );
}
