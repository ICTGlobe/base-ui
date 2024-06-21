import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Table } from "@/components/ui/table";
import { columns } from "./columns";
import data from "@/data/calls_data.json";

const TableCalls = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};

export default TableCalls;
