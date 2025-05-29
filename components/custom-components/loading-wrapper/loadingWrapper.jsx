import { Spinner } from "@/components";

export default function LoadingWrapper({ children, loading }) {
  if (loading) return <Spinner />;
  return <>{children}</>;
}
