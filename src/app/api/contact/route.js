export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

  const text = `
📩 New Portfolio Message

👤 Name: ${name}
📧 Email: ${email}
💬 Message:
${message}
`;

  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text,
    }),
  });

  return Response.json({ success: true });
}
