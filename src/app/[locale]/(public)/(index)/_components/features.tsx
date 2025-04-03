"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/app/_components/ui/dialog";

const invoices = [
  {
    id: "INV001",
    date: "2024-03-15",
    name: "STKVM",
    place: "New York",
    status: "Paid",
    method: "Credit Card",
  },
  {
    id: "INV002",
    date: "2024-03-18",
    name: "MIM",
    place: "Los Angeles",
    status: "Pending",
    method: "PayPal",
  },
  {
    id: "INV003",
    date: "2024-03-20",
    name: "CHORAL",
    place: "Chicago",
    status: "Failed",
    method: "Bank Transfer",
  },
  {
    id: "INV004",
    date: "2024-03-22",
    name: "ST",
    place: "San Francisco",
    status: "Paid",
    method: "Credit Card",
  },
];

export const List = () => {
  const [selectedInvoice, setSelectedInvoice] = useState<
    null | (typeof invoices)[0]
  >(null);
  const [search, setSearch] = useState({ name: "", date: "", place: "" });

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.name.toLowerCase().includes(search.name.toLowerCase()) &&
      invoice.date.includes(search.date) &&
      invoice.place.toLowerCase().includes(search.place.toLowerCase())
  );

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="Search by Name..."
          value={search.name}
          onChange={(e) => setSearch({ ...search, name: e.target.value })}
        />
        <Input
          type="date"
          value={search.date}
          onChange={(e) => setSearch({ ...search, date: e.target.value })}
        />
        <Input
          placeholder="Search by Place..."
          value={search.place}
          onChange={(e) => setSearch({ ...search, place: e.target.value })}
        />
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Place</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedInvoice(invoice)}
              >
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.name}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.place}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                No invoices found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {selectedInvoice && (
        <Dialog
          open={!!selectedInvoice}
          onOpenChange={() => setSelectedInvoice(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invoice Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <p>
                <strong>Invoice ID:</strong> {selectedInvoice.id}
              </p>
              <p>
                <strong>Date:</strong> {selectedInvoice.date}
              </p>
              <p>
                <strong>Place:</strong> {selectedInvoice.place}
              </p>
              <p>
                <strong>Status:</strong> {selectedInvoice.status}
              </p>
              <p>
                <strong>Payment Method:</strong> {selectedInvoice.method}
              </p>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setSelectedInvoice(null)}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
