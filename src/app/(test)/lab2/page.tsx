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
      <h1>No Menu</h1>
    </>
  );
};
export default LabPage;
