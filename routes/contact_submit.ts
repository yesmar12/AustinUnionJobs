import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  req: Request,
  ctx: HandlerContext,
): Promise<Response> => {
  if (req.method === "POST") {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const industry = formData.get("industry");
    const comment = formData.get("comment");

    console.log("Form submitted", { name, email, phone, industry, comment });

    // TODO: Implement email sending or database storage here

    return new Response(
      `Thank you for your submission, ${name}! We'll be in touch soon.`,
      {
        status: 200,
      },
    );
  } else {
    return new Response("Method not allowed", { status: 405 });
  }
};
