"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import ChartCard from "@/components/charts/ChartCard";
import ChartCallSummary from "@/components/charts/ChartCallSummary";
import GridFour from "@/components/grids/GridFour";
import TableCalls from "@/components/tables/tableCalls/TableCalls";

const LabPage = () => {
  const [activeTab, setActiveTab] = useState("All Recordings");

  return (
    <>
      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger
            value="summary"
            onClick={() => setActiveTab("Call Summary")}
          >
            Summary Chart
          </TabsTrigger>
          <TabsTrigger value="table" onClick={() => setActiveTab("Data Table")}>
            Data Table
          </TabsTrigger>
          <TabsTrigger value="grid" onClick={() => setActiveTab("Grid")}>
            Grid
          </TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <ChartCard title="">
            <ChartCallSummary />
          </ChartCard>
        </TabsContent>

        <TabsContent value="table">
          <TableCalls />
        </TabsContent>

        <TabsContent value="grid">
          <GridFour />
        </TabsContent>
      </Tabs>
    </>
  );
};
export default LabPage;
