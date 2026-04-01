import { Skeleton } from "@/components/ui/skeleton";

const PostSkeleton = () => {
  return (
    <div className="space-y-3 m-5">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="w-32 h-4" />
      </div>

      {/* Image */}
      <Skeleton className="w-full aspect-square rounded-md" />

      {/* Actions */}
      <div className="flex gap-4">
        <Skeleton className="w-6 h-6 rounded" />
        <Skeleton className="w-6 h-6 rounded" />
        <Skeleton className="w-6 h-6 rounded" />
      </div>

      {/* Caption */}
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-1/2 h-4" />
    </div>
  );
};

export default PostSkeleton;
