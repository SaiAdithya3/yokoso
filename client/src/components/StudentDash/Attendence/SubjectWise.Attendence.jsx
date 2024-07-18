import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const subjects = [
  { name: "Mathematics", held: 40, attended: 32, missed: 8, percent: 80 },
  { name: "Physics", held: 36, attended: 27, missed: 9, percent: 75 },
  { name: "Chemistry", held: 45, attended: 41, missed: 4, percent: 90 },
  { name: "Biology", held: 42, attended: 36, missed: 6, percent: 49 },
  { name: "English", held: 48, attended: 44, missed: 4, percent: 92 },
  { name: "History", held: 38, attended: 30, missed: 8, percent: 78 },
];

const getBadgeColorClass = (percent) => {
  if (percent > 75) return "bg-green-500 text-white";
  if (percent > 50) return "bg-orange-500 text-white";
  return "bg-red-500 text-white";
};

const getRadialBarColor = (percent) => {
  if (percent > 75) return "#22c55e"; // Green
  if (percent > 50) return "#f97316"; // Orange
  return "#ef4444"; // Red
};

const SubjectWise = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {subjects.map((subject) => (
        <Card key={subject.name}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <Badge 
                variant="solid"
            className="text-sm font-medium">
              {subject.name}
            </Badge>

          </CardHeader>
          <CardContent className="flex-1 pb-5">
            <ChartContainer className="mx-auto aspect-square max-h-[250px]">
              <RadialBarChart
                data={[{ name: subject.name, value: subject.percent }]}
                startAngle={90}
                endAngle={90 + (subject.percent * 360) / 100}
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
                <RadialBar
                  dataKey="value"
                  background
                  cornerRadius={10}
                  fill={getRadialBarColor(subject.percent)}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
                              {subject.percent.toFixed(2)}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              {subject.name}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
            <div className="grid gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Classes Held</span>
                <span>{subject.held}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Classes Attended</span>
                <span>{subject.attended}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Classes Missed</span>
                <span>{subject.missed}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SubjectWise;
