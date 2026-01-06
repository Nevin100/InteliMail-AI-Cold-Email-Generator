import type { NextRequest } from "next/server";

type FormData = {
  name: string;
  companyType: string;
  company: string;
  position: string;
  skills: string[];
  quality1: string;
  quality2: string;
  github: string;
  portfolio: string;
  linkedin: string;
};

const generatePrompt = (form: FormData): string => {
  return `
You are an AI assistant that generates cold emails with a formal, professional tone. The user has filled out a form with the following details. Using these, generate a well-written, impressive cold email that reflects professionalism and is suitable to send to a potential employer or recruiter.

### Instructions:
- Use a formal and polite tone.
- Clearly introduce the user with their name.
- Mention the company name and type.
- Refer to the position offered and align it with the user's skills and qualities , must inclue the qualities : qquality 1 and 2 properly and emphasize on it.
- Include references to their GitHub, portfolio, and LinkedIn.
- The email should sound natural and personalized, not robotic.
- Keep it concise but detailed enough to show confidence and professionalism.
- End with a respectful closing.

### User Details:
- Name: ${form.name}
- Company Type: ${form.companyType}
- Company Name: ${form.company}
- Position Offered: ${form.position}
- Skills: ${form.skills.join(", ")}
- Key Quality 1: ${form.quality1}
- Key Quality 2: ${form.quality2}
- GitHub: ${form.github}
- Portfolio: ${form.portfolio}
- LinkedIn: ${form.linkedin}

Now generate a formal and professional cold email using this information.
`;
};

export async function POST(req: NextRequest) {
  try {
    const form = await req.json() as FormData;

    if (!form || !form.name) {
      return new Response(
        JSON.stringify({ message: "Invalid or missing form data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Received JSON:", form);
   
    const prompt = generatePrompt(form);

    const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  }
);


    const data = await response.json();

    const email =
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Could not generate email";

    return new Response(JSON.stringify({ email }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating email:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
