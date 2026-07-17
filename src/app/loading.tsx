import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center bg-white">
      <Loader />
    </div>
  );
}