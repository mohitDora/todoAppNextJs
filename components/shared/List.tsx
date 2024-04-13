'use client'

import { deleteEvent, getTaskById, updateEvent } from "@/lib/actions/task.action"
import { Button } from "../ui/button";
import { X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"


export const List = ({ list }: { list: any }) => {
  console.log(list?list:"")
  return (
    <>
    
      <Table>
        
        <TableHeader>
          <TableRow>

            <TableHead></TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Task</TableHead>


            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list?.map((item: any, index: any) => (
            <TableRow key={index}>
              <TableCell>
              <Checkbox
                checked={item.isCompleted}
                onCheckedChange={() => updateEvent(item._id, { ...item, isCompleted: !(item.isCompleted) }, "/")}
              />
              </TableCell>
              
              <TableCell>{item.isCompleted ? "Completed" : "Pending"}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="text-right">
              <Button variant="outline" size="icon" onClick={() => deleteEvent(item._id, "/")}>
                <X className="h-4 w-4" />
              </Button>
              </TableCell>
              {/* <TableCell className="text-right">{item.isCompleted}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </>
  )
}
