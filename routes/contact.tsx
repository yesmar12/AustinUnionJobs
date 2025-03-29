import { Head } from "$fresh/runtime.ts";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Toast from "../islands/Toast.tsx";
import { sendMail } from "../utils/send.ts";

export const handler: Handlers = {
  async POST(req: Request, ctx: FreshContext) {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const industry = formData.get("industry");
    const comment = formData.get("comment");

    console.log("Form submitted", { name, email, phone, industry, comment });

    try {
      if (!email || typeof email !== "string") {
        throw new Error("Email is required");
      }
      if (!name || typeof name !== "string") {
        throw new Error("Name is required");
      }
      const subject = `Contact Form Submission from ${name}`;
      const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nIndustry: ${industry}\nComment: ${comment}`;

      await sendMail("ramsey12345@pm.me", subject, text);
      console.log("Email sent successfully");
    } catch (error: any) {
      console.error("Failed to send email", error);
      // Optionally set a different data to indicate failure
      return ctx.render({ message: "There was an error and your message was not recieved", error });
    }

    return ctx.render({ message: "Your submission has been recieved!" });
  },
};

interface Data {
  message?: string;
  error?: boolean;
}

const ContactPage = ({ data }: PageProps<Data>) => {
  const { message, error } = data || {message: undefined, error: false};

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div class="flex justify-center">
        <div class="bg-white shadow-md rounded-lg inline-block px-6 py-8">
          <div class="relative max-w-xl mx-auto">
            <div class="text-center">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
                Contact Us If:
              </h2>
              <ul>
                <li>You got the job and want to celebrate!</li>
                <li>You want to get a job with an organizing workplace.</li>
                <li>You are looking for help applying to a job.</li>
                <li>We are missing a union or a jobsite.</li>
              </ul>
            </div>
            <div class="mt-12">
              <form
                action="/contact"
                method="POST"
                class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div class="sm:col-span-2">
                  <label
                    htmlFor="name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    htmlFor="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <div class="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    htmlFor="industry"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Industry
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="industry"
                      id="industry"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    htmlFor="comment"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Comment
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="comment"
                      name="comment"
                      rows={4}
                      class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <button
                    type="submit"
                    class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toast message={message||""} show={Boolean(message)} error={error} />
    </>
  );
};

export default ContactPage;
