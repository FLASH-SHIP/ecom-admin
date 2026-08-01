"use client";

import { DataTableSkeleton } from "@admin/components/data-table";
import dynamic from "next/dynamic";

const TopupManagementContent = dynamic(() => import("./TopupManagementContent"), {
  ssr: false,
  loading: () => <DataTableSkeleton columnCount={6} rowCount={10} />,
});

export default function TopupManagementClient() {
  return <TopupManagementContent />;
}
