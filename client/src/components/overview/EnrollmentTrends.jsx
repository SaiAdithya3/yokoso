import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function EnrollmentTrends() {
  const data = [
    { month: "Jan", students: 200 },
    { month: "Feb", students: 250 },
    { month: "Mar", students: 300 },
    { month: "Apr", students: 350 },
    { month: "May", students: 400 },
  ];

  return (
    <div className="w-full">
      {" "}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Enrollment Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="students" stroke="#8884d8" />
          </LineChart>
        </CardContent>
      </Card>
    </div>
  );
}
