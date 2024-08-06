import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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
  Tooltip,
  Legend,
} from "recharts";
import LinechartChart from "./LinechartChart";
import StudentOverview from "./StudentOverView";
import CourseWiseAnalysis from "./CourseWiseAnalysis";
import GradeDistribution from "./GradeDistribution";
import AverageGPA from "./AverageGPA";
import YearOverYearAnalysis from "./YearOverYearAnalysis";
import EnrollmentTrends from "./EnrollmentTrends";
import PerformanceOverview from "./PerformanceOverview";
import AttendanceStats from "./AttendanceStats";

export default function AdminOver() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2  3xl:grid-cols-3 w-full p-10 overflow-hidden">
      <div className="flex flex-col gap-6">
        <StudentOverview />
        <CourseWiseAnalysis />
        <GradeDistribution />
      </div>
      <div className="flex flex-col w-full gap-6">
        <AverageGPA />
        <YearOverYearAnalysis />
        
        <PerformanceOverview />
      </div>
      <div className="flex flex-col gap-6">
      <EnrollmentTrends />
        <AttendanceStats />
        <LinechartChart />
      </div>
    </div>
  );
}
