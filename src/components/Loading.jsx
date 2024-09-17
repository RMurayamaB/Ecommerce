import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoaderCircle className="animate-spin size-12" />
    </div>
  );
}

export default Loading;
