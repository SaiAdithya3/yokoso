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
import LinechartChart from "./LinechartChart";
export default function YearOverYearAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Year-over-Year Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <LinechartChart className="aspect-[16/9]" />
      </CardContent>
    </Card>
  );
}
