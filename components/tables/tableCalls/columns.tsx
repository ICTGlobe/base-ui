import { ColumnDef } from "@tanstack/react-table";

export type CallProps = {
  id: string;
  connectTime: string;
  source: string;
  destination: string;
  category: string;
  rating: string;
  duration: string;
};

export const columns: ColumnDef<CallProps>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "connectTime", header: "Connect Time" },
  { accessorKey: "source", header: "Source" },
  { accessorKey: "destination", header: "Destination" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "rating", header: "Rating" },
  { accessorKey: "duration", header: "Duration" },
];
