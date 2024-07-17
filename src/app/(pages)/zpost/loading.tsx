// types
import { Separator } from "@/components/ui/separator";

// shadcn
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingHome() {
  // return
  return (
    <main className="mx-2 my-10">
      {/* posts section */}
      <div className="w-fit">
        <h2 className="text-slate-500 text-lg font-bold capitalize">posts</h2>
        <Separator className="w-full" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 my-10">
        {Array.from({ length: 6 }, (_, index) => (
          <Card key={index} className="flex flex-col max-w-80 p-5 mx-auto">
            <div className="space-y-6">
              <CardTitle className="text-base leading-4">
                <Skeleton className="w-40 h-5" />
              </CardTitle>
              <Separator className="w-3/4 my-2 mx-auto" />
            </div>
            <CardContent className="text-sm my-3 p-0">
              <Skeleton className="w-38 h-20" />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
