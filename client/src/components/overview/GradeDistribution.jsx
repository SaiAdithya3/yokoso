import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function GradeDistribution() {
  return (
    <div className="p-2 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Grade Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChartContainer className="aspect-auto" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <GradeCard value="1,234" label="A+" />
            <GradeCard value="1,567" label="A" />
            <GradeCard value="789" label="B+" />
            <GradeCard value="456" label="B" />
            <GradeCard value="234" label="C+" />
            <GradeCard value="123" label="C" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function GradeCard({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

function BarChartContainer(props) {
  const data = [
    { grade: "A+", count: 1234 },
    { grade: "A", count: 1567 },
    { grade: "B+", count: 789 },
    { grade: "B", count: 456 },
    { grade: "C+", count: 234 },
    { grade: "C", count: 123 },
  ];

  return (
    <div {...props}>
      <ChartContainer className="mx-auto aspect-auto max-h-[300px] pb-0">
        <BarChart
          width={600}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="grade" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
