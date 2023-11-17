"use client";

import JobCard from "@/components/global/home/job/JobCard";

export default function Job() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <JobCard className="w-full mb-4" />
      <JobCard className="w-full mb-4" />
      <JobCard className="w-full mb-4" />
      <JobCard className="w-full mb-4" />
    </main>
  );
}
