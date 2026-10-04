import { EmptyState } from "@/components/ui/primitives";
export default function NotFound() {
  return (
    <EmptyState
      title="This path is a little off track"
      description="The page could not be found. Your workspace is a good place to start again."
      action="Open my dashboard"
      href="/dashboard"
    />
  );
}
