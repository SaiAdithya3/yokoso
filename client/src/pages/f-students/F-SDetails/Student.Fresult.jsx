import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
// import { ChevronDownIcon } from "./ChevronDownIcon"; // Assuming it's a custom icon component
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  CartesianGrid,
  XAxis,
  Line,
  LineChart,
  Area,
  AreaChart,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

const subjectsData = [
  {
    title: "Maths 1",
    marks: 92,
    grade: "O",
    details: [
      { name: "Continuous Assessment", marks: "30/40" },
      { name: "Mid Terms", marks: "32/40" },
      { name: "End Term", marks: "30/40" },
      { name: "Attendance", marks: "10/10" },
    ],
  },
  {
    title: "Physics 2",
    marks: 85,
    grade: "A",
    details: [
      { name: "Continuous Assessment", marks: "28/40" },
      { name: "Mid Terms", marks: "30/40" },
      { name: "End Term", marks: "27/40" },
      { name: "Attendance", marks: "9/10" },
    ],
  },
  {
    title: "Chemistry 3",
    marks: 88,
    grade: "B",
    details: [
      { name: "Continuous Assessment", marks: "32/40" },
      { name: "Mid Terms", marks: "34/40" },
      { name: "End Term", marks: "22/40" },
      { name: "Attendance", marks: "9/10" },
    ],
  },
  {
    title: "Data Structures 4",
    marks: 90,
    grade: "A",
    details: [
      { name: "Continuous Assessment", marks: "35/40" },
      { name: "Mid Terms", marks: "35/40" },
      { name: "End Term", marks: "20/40" },
      { name: "Attendance", marks: "10/10" },
    ],
  },
  {
    title: "Machine Learning 5",
    marks: 82,
    grade: "C",
    details: [
      { name: "Continuous Assessment", marks: "28/40" },
      { name: "Mid Terms", marks: "26/40" },
      { name: "End Term", marks: "28/40" },
      { name: "Attendance", marks: "8/10" },
    ],
  },
  {
    title: "Finance 6",
    marks: 87,
    grade: "C",
    details: [
      { name: "Continuous Assessment", marks: "33/40" },
      { name: "Mid Terms", marks: "32/40" },
      { name: "End Term", marks: "22/40" },
      { name: "Attendance", marks: "9/10" },
    ],
  },
];

const Fresult = () => {
  const [activeSemester, setActiveSemester] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("marks");
  const [expandedSubject, setExpandedSubject] = useState(null);

  const handleSemesterClick = (semester) => {
    setActiveSemester(semester);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSubjectExpand = (subjectIndex) => {
    setExpandedSubject(expandedSubject === subjectIndex ? null : subjectIndex);
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {semesters.map((semester) => (
            <Button
              key={semester}
              variant={activeSemester === semester ? "primary" : "outline"}
              onClick={() => handleSemesterClick(semester)}
              className={`px-6 py-2 rounded-full
                ${
                  activeSemester === semester
                    ? "bg-primary text-white"
                    : "bg-card text-primary"
                }
                `}
            >
              Semester {semester}
            </Button>
          ))}
        </div>
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Semester {activeSemester} Results
            </h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <span>
                    {selectedFilter.charAt(0).toUpperCase() +
                      selectedFilter.slice(1)}
                  </span>
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedFilter}
                  onValueChange={handleFilterChange}
                >
                  <DropdownMenuRadioItem value="marks">
                    Marks
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="analysis">
                    Graphical Analysis
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {subjectsData.map((subject, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="">{subject.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold">{subject.marks}</div>
                    <div className=" text-4xl">{subject.grade}</div>
                  </div>
                  <p className="text-muted-foreground">Marks</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    onClick={() => handleSubjectExpand(index)}
                    className="w-full"
                  >
                    View More
                  </Button>
                </CardFooter>
                {expandedSubject === index && (
                  <div className="mt-4 border-t pt-4">
                    <div className="  place-items-center   mb-4 ">
                      {subject.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className=" flex justify-between  mt-2   px-5 items-center text-left"
                        >
                          <div className="text-muted-foreground text-left ">
                            {detail.name}
                          </div>
                          <div className="text-2xl text-black/90 font-bold text-left   ">
                            {detail.marks}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
          {selectedFilter === "analysis" && (
            <div className="flex justify-center">
              <LineChartComponent />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

function LineChartComponent() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-center">
          <Button className="w-full" variant="primary">
            View Full Report
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Fresult;

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
