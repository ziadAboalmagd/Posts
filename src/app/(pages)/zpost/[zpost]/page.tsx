// React & Next
import React from "react";

// components
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Post } from "@/app/types";
import { getPosts } from "@/app/utils/api";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Posts({
  params: { zpost },
}: {
  params: { zpost: number };
}) {
  // page number
  const pageNumber = Number(zpost);
  // posts
  const posts: Post[] = await getPosts(10, zpost);
  // return
  return (
    <div className="m-10">
      <Link href="/" className="w-fit flex flex-row gap-1">
        <ChevronLeft className="text-slate w-4" />
        {/* posts section */}
        <h3 className="text-slate-500 text-base font-bold capitalize">home</h3>
      </Link>
      <h2 className="text-slate-500 text-2xl font-bold capitalize w-fit mx-auto">
        posts
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 my-10">
        {posts.map((i, index) => (
          <Card key={index} className="flex flex-col max-w-80 p-5 mx-auto">
            <div className="space-y-6">
              <CardTitle className="text-base leading-4">
                {index + 1 + "- " + i.title}
              </CardTitle>
              <Separator className="w-3/4 my-2 mx-auto" />
            </div>
            <CardContent className="text-sm my-3 p-0">{i.body}</CardContent>
          </Card>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          {pageNumber !== 0 && (
            <PaginationItem>
              <PaginationPrevious href={"/zpost/" + (pageNumber - 1)} />
            </PaginationItem>
          )}
          {pageNumber > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationLink href={"/zpost/" + pageNumber} isActive>
            {pageNumber}
          </PaginationLink>
          {posts.length !== 0 &&
            Array.from({ length: 2 }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={"/zpost/" + (pageNumber + index + 1)}
                  isActive
                >
                  {pageNumber + index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          {posts.length !== 0 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href={"/zpost/" + (pageNumber + 1)} />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
