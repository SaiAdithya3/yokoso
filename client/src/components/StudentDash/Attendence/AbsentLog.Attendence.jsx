import React from 'react'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { DownloadIcon } from "@/components/ui/icons";

const AbsentLog = () => {
  return (
    <div>  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Absence Log</CardTitle>
      <Button variant="outline" size="sm" className="h-8 gap-1">
        <DownloadIcon className="h-4 w-4" />
        <span>Export</span>
      </Button>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Reason</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Mathematics</TableCell>
            <TableCell>2023-04-15</TableCell>
            <TableCell>Illness</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Physics</TableCell>
            <TableCell>2023-05-02</TableCell>
            <TableCell>Family Emergency</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chemistry</TableCell>
            <TableCell>2023-06-20</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Biology</TableCell>
            <TableCell>2023-07-10</TableCell>
            <TableCell>Illness</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>English</TableCell>
            <TableCell>2023-08-05</TableCell>
            <TableCell>Personal</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>History</TableCell>
            <TableCell>2023-09-18</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card></div>
  )
}

export default AbsentLog


function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}