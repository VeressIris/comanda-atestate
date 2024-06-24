import { ADMIN, ADMIN_PASSWORD } from "$env/static/private";

export const POST = async ({ request }) => {
  const data = await request.json();
  if (data.username === ADMIN && data.password === ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ admin: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(JSON.stringify({ admin: false }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
