// app/api/data/route.js
export async function GET() {
  // Simulating fetching data (you can replace this with real data fetching)
  const data = [{ name: "John Doe", age: 30 }];

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
