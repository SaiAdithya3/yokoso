import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminSidebar from "@/components/common/Nav/AdminSidebar";
import Navbar from "./Navbar";
import Dialog from "./Dialog"; // Assuming you have a Dialog component

const data = [
  {
    studentId: "1",
    studentName: "John Doe",
    borrowedBooks: [
      { id: 1, title: "Book 1", author: "Author 1", published: "2020-01-01" },
      { id: 2, title: "Book 2", author: "Author 2", published: "2020-02-02" },
      { id: 4, title: "Book 4", author: "Author 4", published: "2020-04-04" },
    ],
    date: "2021-10-10",
  },
  {
    studentId: "2",
    studentName: "Jane Smith",
    borrowedBooks: [
      { id: 3, title: "Book 3", author: "Author 3", published: "2020-03-03" },
      { id: 5, title: "Book 5", author: "Author 5", published: "2020-05-05" },
    ],
    date: "2021-10-11",
  },
  {
    studentId: "3",
    studentName: "Michael Brown",
    borrowedBooks: [
      { id: 6, title: "Book 6", author: "Author 6", published: "2020-06-06" },
      { id: 7, title: "Book 7", author: "Author 7", published: "2020-07-07" },
    ],
    date: "2021-10-12",
  },
];

const Loans = () => {
  const [studentQuery, setStudentQuery] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = () => {
    const student = data.find(
      (entry) =>
        entry.studentId === studentQuery || entry.studentName === studentQuery
    );

    if (student && student.borrowedBooks.length > 0) {
      setBorrowedBooks(student.borrowedBooks);
      setSelectedStudent(student);
    } else {
      setBorrowedBooks([]);
      setSelectedStudent(null);
    }
  };

  const handleReturn = () => {
    setShowConfirmation(true);
  };

  const confirmReturn = () => {
    // Simulate returning books
    const updatedData = data.map((entry) => {
      if (entry.studentId === selectedStudent.studentId) {
        return {
          ...entry,
          borrowedBooks: entry.borrowedBooks.filter(
            (book) => !selectedBooks.includes(book.id)
          ),
        };
      }
      return entry;
    });

    // Update state with updated data
    const updatedStudent = updatedData.find(
      (entry) => entry.studentId === selectedStudent.studentId
    );

    if (updatedStudent && updatedStudent.borrowedBooks.length > 0) {
      setBorrowedBooks(updatedStudent.borrowedBooks);
    } else {
      setBorrowedBooks([]);
    }

    setSelectedBooks([]);
    setShowConfirmation(false);
    setSelectedStudent(null);
  };

  return (
    <div className="flex gap-3">
      <AdminSidebar />
      <div className="w-full gap-2 mb-4">
        <Navbar />
        <div className="flex gap-2 items-center">
          <Input
            type="text"
            placeholder="Enter student ID or name..."
            value={studentQuery}
            onChange={(e) => setStudentQuery(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>
            <Search />
          </Button>
        </div>
        <div className="mt-4">
          {selectedStudent && borrowedBooks.length > 0 ? (
            <div>
              <p className="text-lg font-bold mb-2">
                Borrowed Books by {selectedStudent.studentName}:
              </p>
              {borrowedBooks.map((book) => (
                <div
                  key={book.id}
                  className="border flex w-full justify-between rounded-lg p-4 mb-2"
                >
                  <div>
                    <p className="text-lg font-bold">{book.title}</p>
                    <p className="text-sm text-gray-600">
                      Author: {book.author}
                    </p>
                    <p className="text-sm text-gray-600">
                      Published: {book.published}
                    </p>
                  </div>
                  <Button
                    className="mt-2"
                    onClick={() =>
                      setSelectedBooks((prev) =>
                        prev.includes(book.id)
                          ? prev.filter((id) => id !== book.id)
                          : [...prev, book.id]
                      )
                    }
                  >
                    {selectedBooks.includes(book.id) ? "Deselect" : "Select"}
                  </Button>
                </div>
              ))}
              <Button className="mt-4" onClick={handleReturn}>
                Return Selected Books
              </Button>
            </div>
          ) : (
            <p className="text-gray-600">
              {selectedStudent
                ? "No books found for the student."
                : "Please search for a valid student ID or name."}
            </p>
          )}
        </div>
      </div>
      {showConfirmation && (
        <Dialog
          isOpen={showConfirmation}
          title="Confirm Return"
          onConfirm={confirmReturn}
          onCancel={() => setShowConfirmation(false)}
        >
          <ul className="list-disc pl-6">
            {selectedBooks.map((bookId) => (
              <li key={bookId}>
                {selectedStudent.borrowedBooks.find(
                  (book) => book.id === bookId
                )?.title}
              </li>
            ))}
          </ul>
        </Dialog>
      )}
    </div>
  );
};

export default Loans;
