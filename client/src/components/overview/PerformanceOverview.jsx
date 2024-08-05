import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function PerformanceOverview() {
  const data = [
    { month: "Jan", performance: 75 },
    { month: "Feb", performance: 80 },
    { month: "Mar", performance: 85 },
    { month: "Apr", performance: 90 },
    { month: "May", performance: 95 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="performance" stroke="#82ca9d" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
