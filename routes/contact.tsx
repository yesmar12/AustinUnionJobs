import { Head } from "$fresh/runtime.ts";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div class="relative max-w-xl mx-auto">
          
          <div class="text-center">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact us
            </h2>
            <p class="mt-4 text-lg leading-6 text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              lacus laoreet non curabitur gravida.
            </p>
          </div>
          <div class="mt-12">
            <form
              action="/contact_submit"
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
    </>
  );
};

export default ContactPage;
