import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const messages = [
  { content: "Welcome to the new semester!", date: "July 19, 2024" },
  { content: "Math midterm exam on August 10th.", date: "July 15, 2024" },
  { content: "Science project due date extended to July 30th.", date: "July 12, 2024" },
];

const MessagesCard = () => {
  return (
    <div className="w-full">
      <Card className="border-2 bg-white border-zinc-50 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Messages & Announcements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 -mt-2">
          {messages.map((message, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm">
              <div>
                <h3 className="text-lg font-medium">{message.content}</h3>
                <p className="text-sm text-gray-600">{message.date}</p>
              </div>
              <Button variant="link" className="text-sky-600">
                View Details
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagesCard;
