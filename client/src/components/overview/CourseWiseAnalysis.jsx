import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart";
import { Pie, PieChart, CartesianGrid, XAxis, Line, LineChart, YAxis } from "recharts";

export default function CourseWiseAnalysis() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Course-wise Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead className="text-right">Pass %</TableHead>
                <TableHead className="text-right">Fail %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Computer Science</TableCell>
                <TableCell className="text-right">85%</TableCell>
                <TableCell className="text-right">15%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mathematics</TableCell>
                <TableCell className="text-right">78%</TableCell>
                <TableCell className="text-right">22%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Physics</TableCell>
                <TableCell className="text-right">82%</TableCell>
                <TableCell className="text-right">18%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Chemistry</TableCell>
                <TableCell className="text-right">75%</TableCell>
                <TableCell className="text-right">25%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Biology</TableCell>
                <TableCell className="text-right">88%</TableCell>
                <TableCell className="text-right">12%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }