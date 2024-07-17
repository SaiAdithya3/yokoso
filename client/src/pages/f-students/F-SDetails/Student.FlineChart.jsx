/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NDza2T6UY1r
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, CartesianGrid, XAxis, Line } from "recharts"

 const StudentGraph=()=> {
  const semesterData = [
    { semester: 1, tgpa: 8.8 },
    { semester: 2, tgpa: 4.9 },
    { semester: 3, tgpa: 9.0 },
    { semester: 4, tgpa: 5.7 },
    { semester: 5, tgpa: 6.9 },
    { semester: 6, tgpa: 7.0 },
    { semester: 7, tgpa: 10.8 },
    { semester: 8, tgpa: 3.9 },
  ]
  const chartConfig = {
    semester: {
      label: "Semester",
      color: "hsl(var(--chart-1))",
    },
    tgpa: {
      label: "TGPA",
      color: "hsl(var(--chart-2))",
    },
  }
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Semester TGPA</CardTitle>
        <CardDescription>Semester 1 - Semester 8</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className=" h-[10rem] w-full" config={chartConfig}>
          <LineChart className=" " accessibilityLayer data={semesterData} margin={{ top:50, left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="semester" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="tgpa"
              type="natural"
              stroke="var(--color-tgpa)"
              strokeWidth={2}
              dot={{ fill: "var(--color-tgpa)" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 0.2 TGPA this semester <TrendingUpIcon className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">Showing total TGPA for the last 8 semesters</div>
      </CardFooter>
    </Card>
  )
}

function TrendingUpIcon(props) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default StudentGraph;