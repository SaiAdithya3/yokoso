import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart";
import { Pie, PieChart, CartesianGrid, XAxis, Line, LineChart, YAxis } from "recharts";

export default function LinechartChart(props) {
    return (
      <div {...props}>
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "hsl(var(--chart-1))",
            },
          }}
        >
          <LineChart
            accessibilityLayer
            data={[
              { year: "2021", pass: 2560, fail: 456 },
              { year: "2022", pass: 2730, fail: 390 },
              { year: "2023", pass: 2890, fail: 340 },
              { year: "2024", pass: 3000, fail: 300 },
            ]}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              label={{ value: 'Number of Students', angle: -90, position: 'insideLeft' }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line dataKey="pass" type="monotone" stroke="var(--color-pass)" strokeWidth={2} dot={false} />
            <Line dataKey="fail" type="monotone" stroke="var(--color-fail)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </div>
    )
  }