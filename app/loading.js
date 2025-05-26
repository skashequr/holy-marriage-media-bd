import { Skeleton, SkeletonLine } from "keep-react";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <SkeletonLine className="h-4 w-full" />
      <SkeletonLine className="h-4 w-full" />
      <SkeletonLine className="h-4 w-3/5" />
      <SkeletonLine className="h-4 w-4/5" />
      <SkeletonLine className="h-10 w-2/5" />
    </Skeleton>
  );
}
