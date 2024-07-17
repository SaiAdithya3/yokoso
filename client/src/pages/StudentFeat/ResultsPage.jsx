import React from 'react';
import { TrendingUp } from 'lucide-react';
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';
import StudentGraph from '../f-students/F-SDetails/Student.FlineChart';
import Fresult from '../f-students/F-SDetails/Student.Fresult';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';

const cgpa = 7.8;

const getCGPAColor = (cgpa) => {
  if (cgpa > 7.5) return '#22c55e';
  if (cgpa > 5.0) return '#eab308'; 
  return '#ef4444'; 
};

const chartData = [
  { name: 'CGPA', value: cgpa * 10, fill: getCGPAColor(cgpa) },
];

const chartConfig = {
  value: {
    label: 'CGPA',
  },
  CGPA: {
    label: 'CGPA',
    color: 'hsl(var(--chart-2))',
  },
};

const ResultsPage = () => {
  return (
    <div className="flex gap-4 min-h-screen bg-gray-50">
      <StudentSidebar />
      <div className="flex gap-4 flex-col p-4 w-full">
        <h1 className="text-3xl font-semibold sticky top-0 bg-gray-50/40 w-full border-b border-gray-100 backdrop-blur-md p-3">Results</h1>
        <div className="w-full flex gap-5">
          <div className="w-1/3 rounded-xl flex items-center justify-center bg-white">
            <Card className="flex flex-col w-full">
              <CardHeader className="items-center pb-0">
                <CardTitle>TGPA Indicator</CardTitle>
                <CardDescription>Current Semester</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <RadialBarChart
                    data={chartData}
                    startAngle={90}
                    endAngle={90 + (cgpa * 360 / 10)} // Adjust endAngle based on CGPA
                    innerRadius={80}
                    outerRadius={110}
                    barSize={10}
                  >
                    <PolarGrid
                      gridType="circle"
                      radialLines={false}
                      stroke="none"
                      className="first:fill-muted last:fill-background"
                      polarRadius={[86, 74]}
                    />
                    <RadialBar dataKey="value" background cornerRadius={10} />
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                            return (
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                              >
                                <tspan
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  className="fill-foreground text-4xl font-bold"
                                >
                                  {cgpa.toFixed(2)}
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 24}
                                  className="fill-muted-foreground"
                                >
                                  CGPA
                                </tspan>
                              </text>
                            );
                          }
                        }}
                      />
                    </PolarRadiusAxis>
                  </RadialBarChart>
                </ChartContainer>
              </CardContent>
              <div className="leading-none text-sm w-full text-center pb-2 text-muted-foreground">
                Showing CGPA for the current semester
              </div>
            </Card>
          </div>
          <div className="w-full">
            <StudentGraph />
          </div>
        </div>
        <Fresult />
      </div>
    </div>
  );
};

export default ResultsPage;
