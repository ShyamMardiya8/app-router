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

export async function POST(req) {
  // Parse the incoming JSON body
  const { name, email } = await req.json();

  // Validation checks
  if (!name) {
    return new Response(
      JSON.stringify({ message: "Enter name" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!email) {
    return new Response(
      JSON.stringify({ message: "Enter email" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Simulate saving data (you can replace this with real database logic)
  const newUser = { name, email };

  return new Response(
    JSON.stringify({ message: "User created successfully", user: newUser }),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
}
