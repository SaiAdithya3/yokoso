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
    <div className="flex gap-4 w-full p-10 overflow-hidden">
      <div className="flex flex-col gap-6">
        <StudentOverview />
        <CourseWiseAnalysis />
      <EnrollmentTrends />
      </div>
      <div className="flex flex-col w-full gap-6">
        <GradeDistribution />
        <YearOverYearAnalysis />
        
        <PerformanceOverview />
      </div>
      <div className="flex flex-col gap-6">
        <AverageGPA />
        <AttendanceStats />
        <LinechartChart />
      </div>
    </div>
  );
}
