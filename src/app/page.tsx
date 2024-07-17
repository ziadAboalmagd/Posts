// React & Next
import Link from "next/link";

// types
import { Separator } from "@/components/ui/separator";

// shadcn
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default async function Home() {
  // return
  return (
    <main className="flex items-center justify-center min-h-screen mx-2 my-10">
      <div className="grid grid-cols-2 justify-items-center gap-x-20">
        <Link href="/zpost">
          <Card className="w-60">
            <CardContent className="flex flex-col items-center p-5 mx-auto">
              <div className="space-y-6">
                <CardTitle className="text-base leading-4">
                  my ordinary way
                </CardTitle>
                <Separator className="w-3/4 my-2 mx-auto" />
              </div>
              <CardContent className="text-sm my-3 p-0">
                fetching all data at once then filter it using filter
              </CardContent>
            </CardContent>
          </Card>
        </Link>
        <Link href="/post/0">
          <Card className="w-60">
            <CardContent className="flex flex-col items-center p-5 mx-auto">
              <div className="space-y-6">
                <CardTitle className="text-base leading-4">new way</CardTitle>
                <Separator className="w-3/4 my-2 mx-auto" />
              </div>
              <CardContent className="text-sm my-3 p-0">
                fetching data according to best practise
              </CardContent>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  );
}
