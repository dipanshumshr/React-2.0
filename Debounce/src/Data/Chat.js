export const messages = Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    sender: `User${(index % 10) + 1}`, // 10 users cycling
    message: `This is chat message number ${index + 1}`
  }));
  