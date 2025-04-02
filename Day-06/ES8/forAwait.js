async function printMessages() {
  const messages = [
    Promise.resolve("Hello"),
    new Promise((res) => setTimeout(() => res("1"), 1000)),
    new Promise((res) => setTimeout(() => res("2"), 2000)),
    new Promise((res) => setTimeout(() => res("3"), 3000)),
  ];

  for await (const msg of messages) {
    console.log(msg);
  }
  let resul = await new Promise((res) =>
    setTimeout(() => res("All messages printed ✅"), 1000)
  );
  console.log(resul);
}

printMessages();
