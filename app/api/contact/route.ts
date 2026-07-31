import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    if (accessKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `Portfolio Contact from ${name}`,
          from_name: "Urooj Fatima Portfolio",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        return NextResponse.json(
          { error: result.message || "Failed to send message" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    if (formspreeEndpoint) {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        return NextResponse.json(
          { error: "Failed to send message" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please email uroooj056@gmail.com directly or contact the site owner.",
      },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
