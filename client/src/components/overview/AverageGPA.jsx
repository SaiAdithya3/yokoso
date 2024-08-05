import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart";
import { Pie, PieChart, CartesianGrid, XAxis, Line, LineChart, YAxis } from "recharts";

export default function AverageGPA() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Average GPA</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4">
          <div className="text-8xl font-bold">3.78</div>
          <div className="text-muted-foreground">Average GPA</div>
        </CardContent>
      </Card>
    )
  }
  