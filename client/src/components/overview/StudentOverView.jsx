import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import {
  Pie,
  PieChart,
  CartesianGrid,
  XAxis,
  Line,
  LineChart,
  YAxis,
} from "recharts";

export default function StudentOverview() {
  return (
    <div className="border flex p-4 flex-col gap-2 rounded-2xl h-fit w-full ">
      <CardHeader>
        <h1 className="text-2xl">Student Overview</h1>
      </CardHeader>
      <div className="flex gap-4 items-center justify-center">
        <StatCard value="3,456" label="Total Students" />
        <StatCard value="2,789" label="Pass Students" color="text-green-500" />
        <StatCard value="667" label="Fail Students" color="text-red-500" />
       
      </div>
      <div className="flex gap-4 items-center justify-center">
      <StatCard
          value="80.7%"
          label="Pass Percentage"
          color="text-green-500"
        />
        <StatCard value="19.3%" label="Fail Percentage" color="text-red-500" />

      </div>
    </div>
  );
}

function StatCard({ value, label, color = "text-muted-foreground" }) {
  return (
    <div>
      {" "}
      <div className="flex flex-col border p-4 w-36  rounded-2xl items-center justify-center gap-2">
        <div className={`text-4xl font-bold ${color}`}>{value}</div>
        <div className={color}>{label}</div>
      </div>
    </div>
  );
}
