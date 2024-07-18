import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OverAll = () => {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Overall Attendance
          </CardTitle>
          <div className="flex items-center gap-2">
            <PercentIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-2xl font-bold">85%</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Total Classes Held</span>
              <span>249</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total Classes Attended</span>
              <span>211</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total Classes Missed</span>
              <span>38</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverAll;

function PercentIcon(props) {
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
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}
