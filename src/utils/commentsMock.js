export const comments = [
  {
    name: "Aarav Mehta",
    text: "This tutorial made nested comments much easier to understand. The structure is really clean.",
    replies: [
      {
        name: "Sana Kapoor",
        text: "I agree! The recursive pattern here is simple and perfect for rendering threaded discussions.",
        replies: [
          {
            name: "Rohan Deshmukh",
            text: "Exactly, recursion is the best way to handle deeply nested replies like this.",
            replies: [],
          },
          {
            name: "Ishita Verma",
            text: "I tried something similar in React and it worked really well with reusable components.",
            replies: [],
          },
          {
            name: "Kunal Bhatia",
            text: "The best part is that you can scale this structure without changing much in the UI logic.",
            replies: [
              {
                name: "Neha Joshi",
                text: "Yes, especially when each comment component calls itself for replies.",
                replies: [],
              },
              {
                name: "Dev Malhotra",
                text: "That approach keeps the code modular and easy to maintain.",
                replies: [],
              },
              {
                name: "Priya Nair",
                text: "I also like how this makes indentation and styling for replies very straightforward.",
                replies: [],
              },
              {
                name: "Yash Kulkarni",
                text: "Once recursion clicks, nested comment systems become much less intimidating.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Meera Shah",
        text: "This data shape is ideal if you're planning to build a comment section like YouTube or Reddit.",
        replies: [
          {
            name: "Aditya Rao",
            text: "True, it mirrors real-world threaded conversations pretty closely.",
            replies: [],
          },
          {
            name: "Pooja Sethi",
            text: "And it also makes it easier to add reply counts or collapse functionality later.",
            replies: [],
          },
        ],
      },
      {
        name: "Kabir Arora",
        text: "I like how readable the object is even with multiple nesting levels.",
        replies: [],
      },
      {
        name: "Ananya Iyer",
        text: "This would be great for practicing recursive rendering in frontend interviews.",
        replies: [],
      },
      {
        name: "Vivaan Sharma",
        text: "The sample is detailed enough to test both shallow and deeply nested replies.",
        replies: [],
      },
    ],
  },
  {
    name: "Tanya Khanna",
    text: "I used a similar structure in a blog project, and it helped a lot when implementing replies.",
    replies: [
      {
        name: "Harsh Patel",
        text: "Same here. Once the state management is handled properly, the UI becomes much easier to build.",
        replies: [],
      },
    ],
  },
  {
    name: "Nikhil Anand",
    text: "This is a great example for learning how nested JSON data works in JavaScript applications.",
    replies: [],
  },
  {
    name: "Simran Gill",
    text: "I appreciate that the replies array is always present, even when empty. It keeps rendering logic consistent.",
    replies: [],
  },
  {
    name: "Arjun Sinha",
    text: "This kind of sample data is perfect for testing recursive components and comment thread styling.",
    replies: [],
  },
];
