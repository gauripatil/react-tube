export const generateRandomName = () => {
  const names = [
    "Gauri",
    "Shubham",
    "Pooja",
    "Rahul",
    "Sneha",
    "Amit",
    "Neha",
    "Karan",
    "Anjali",
    "Rohit",
    "Sonal",
    "Vikram",
    "Priya",
    "Aditya",
    "Kavya",
    "Manish",
    "Divya",
    "Suresh",
    "Anita",
    "Rakesh",
    "Meera",
    "Ashish",
    "Nisha",
    "Sunil",
    "Pallavi",
    "Vishal",
    "Sanjana",
    "Deepak",
    "Ritu",
    "Kunal",
    "Anu",
    "Siddharth",
    "Shivani",
    "Pranav",
    "Madhuri",
    "Harsh",
    "Sakshi",
    "Raghav",
    "Isha",
    "Yash",
    "Ayesha",
    "Karanveer",
    "Simran",
    "Arjun",
    "Nikita",
    "Satyam",
    "Shreya",
    "Vivek",
    "Pooja",
    "John",
    "Emily",
    "Michael",
    "Sarah",
    "David",
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

export const generateRandomMessage = () => {
  const messages = [
    "This is a sample comment.",
    "Hello, how are you?",
    "Lorem ipsum dolor sit amet.",
    "This video is amazing!",
    "I learned a lot from this.",
    "Can you make more videos like this?",
    "Thanks for sharing!",
    "Great content as always.",
    "I have a question about the topic.",
    "This is so helpful, thank you!",
    "I disagree with some points made in the video.",
    "Can you explain this part in more detail?",
    "I love the way you explain things.",
    "This is the best video on this topic.",
    "I wish I found this video earlier.",
    "Keep up the good work!",
    "This video deserves more views.",
    "I have a suggestion for a future video.",
    "Can you do a live stream on this topic?",
    "This is exactly what I was looking for.",
    "I have a different perspective on this topic.",
    "This video is so well made.",
    "I can't wait to try this out.",
    "This is a game changer for me.",
    "I appreciate the effort you put into this video.",
    "This is a great resource for beginners.",
    "I have been struggling with this topic, and this video helped a lot.",
    "This is a must-watch for anyone interested in this topic.",
    "I have been following your channel for a while, and I love your content.",
    "This video is so informative and easy to understand.",
    "I have a question about the tools you used in this video.",
    "This is a fantastic explanation of a complex topic.",
    "I have been looking for a video like this for a long time.",
    "This video has inspired me to learn more about this topic.",
    "I have a suggestion for improving this video.",
    "This is a great example of how to explain difficult concepts.",
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

export const parseISO8601Duration = (iso, isTimestamp = false) => {
  // returns duration in seconds (simple parser)
  if (!iso) return 0;
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  //   console.log("Parsing duration:", iso, "=>", m);
  if (!m) return 0;
  const hours = parseInt(m[1] || "0", 10);
  const minutes = parseInt(m[2] || "0", 10);
  const seconds = parseInt(m[3] || "0", 10);
  const res = hours * 3600 + minutes * 60 + seconds;
  return isTimestamp ? formatDuration(res) : res;
};

export const formatDuration = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  } else {
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
};

export const isVerticalOrSquare = (thumbnails) => {
  // choose the highest-resolution thumbnail available
  const thumb =
    thumbnails?.maxres ||
    thumbnails?.standard ||
    thumbnails?.high ||
    thumbnails?.medium ||
    thumbnails?.default;
  if (!thumb) return false;
  const width = thumb.width || 0;
  const height = thumb.height || 0;
  if (!width || !height) return false;
  return height >= width; // vertical or square
};

export const formatViewCount = (viewCount) => {
  if (viewCount >= 1e9) {
    return (viewCount / 1e9).toFixed(1) + "B views";
  } else if (viewCount >= 1e6) {
    return (viewCount / 1e6).toFixed(1) + "M views";
  } else if (viewCount >= 1e3) {
    return (viewCount / 1e3).toFixed(1) + "K views";
  } else {
    return viewCount + " views";
  }
};
