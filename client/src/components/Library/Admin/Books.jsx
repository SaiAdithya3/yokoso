import AdminSidebar from "@/components/common/Nav/AdminSidebar";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Search, ShoppingCart } from "lucide-react";
import Navbar from "./Navbar";
import books from "./Dummydata";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";

const Books = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [studentNumber, setStudentNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.id.toString().includes(searchQuery)
  );

  const toggleBookSelection = (id) => {
    if (selectedBooks.includes(id)) {
      setSelectedBooks(selectedBooks.filter((bookId) => bookId !== id));
    } else {
      setSelectedBooks([...selectedBooks, id]);
    }
  };

  const handleLoan = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
      <div className="flex">
        <AdminSidebar />
        <div className="w-full">
          <Navbar />
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl mx-10 font-bold">Books</h1>
            <div className="flex mx-10 items-center justify-center gap-2">
              <Input
                type="search"
                placeholder="Search books by name, author, or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-lg"
              />
              <Button onClick={handleLoan} className="">
                Loan Selected Books
              </Button>
            </div>
          </div>
          <div className=" px-10 pb-10 overflow-x-auto">
            <Table className="w-full  border rounded-lg shadow-md">
              <TableHeader className="bg-black text-white">
                <TableRow>
                  <TableHead className="text-white" style={{ width: "10%" }}>
                    Select
                  </TableHead>
                  <TableHead className="text-white w-[60%]">Title</TableHead>
                  <TableHead className="text-white w-[23%]">Author</TableHead>
                  <TableHead className="text-white">Published</TableHead>
                  <TableHead className="text-white">Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBooks.map((book) => (
                  <TableRow
                    key={book.id}
                    className="cursor-pointer hover:bg-gray-200/20"
                  >
                    <TableCell className="py-2 px-4">
                      <Checkbox onChange={() => toggleBookSelection(book.id)} />
                    </TableCell>
                    <TableCell className="py-2 px-4">{book.title}</TableCell>
                    <TableCell className="py-2 px-4">{book.author}</TableCell>
                    <TableCell className="py-2 px-4">
                      {book.published}
                    </TableCell>
                    <TableCell className="py-2 px-4">1</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Loan Books</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="mb-2 text-gray-700">Selected Books:</p>
            <ul className="list-disc ml-6">
              {selectedBooks.map((bookId) => {
                const book = books.find((b) => b.id === bookId);
                return (
                  <li key={book.id}>
                    {book.title} by {book.author}
                  </li>
                );
              })}
            </ul>
            <Input
              type="text"
              placeholder="Enter student number"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
              className="mb-4 mt-4"
            />
          </div>
          <DialogFooter>
            <Button onClick={() => handleLoan()} className="mr-2">
              Loan
            </Button>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Books;
