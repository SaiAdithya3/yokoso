import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function AttendanceStats() {
  const data = [
    { name: "Present", value: 500 },
    { name: "Absent", value: 100 },
    { name: "Late", value: 50 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendance Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <PieChart width={400} height={300}>
          <Pie data={data} dataKey="value" outerRadius={120} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </CardContent>
    </Card>
  );
}
