import { Head } from "$fresh/runtime.ts";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p class="text-sm text-gray-600 mb-4">Last Updated: March 30, 2025</p>
        <p>
          This privacy policy describes how Austin Union Jobs collects, uses,
          and shares information about you when you use our website.
        </p>
        <h2 class="text-xl font-bold mt-4">Information We Collect</h2>
        <p>
          The only information we collect is that which you provide to us in the
          contact form.
        </p>
        <h2 class="text-xl font-bold mt-4">How We Use Your Information</h2>
        <p>
          We use your information to:
        </p>
        <ul>
          <li>
            Contact you about your inquiry.
          </li>
          <li>
            Improve our website and services.
          </li>
        </ul>
        <h2 class="text-xl font-bold mt-4">Sharing Your Information</h2>
        <p>
          Your information is shared with the following third parties:
        </p>
        <ul>
          <li>
            Deno Deploy - our hosting provider
          </li>
          <li>
            Mailgun - our email service provider
          </li>
        </ul>
        <h2 class="text-xl font-bold mt-4">Your Choices</h2>
        <p>
          We only collect the information you explicitly provide via the contact
          form. This information is used solely to respond to your inquiry. If
          you do not wish for us to collect this information, please refrain
          from using the contact form.
        </p>
        <h2 class="text-xl font-bold mt-4">Data Security</h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure.
        </p>
        <h2 class="text-xl font-bold mt-4">Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will post any
          changes on our website.
        </p>
        <h2 class="text-xl font-bold mt-4">Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us
          through the contact form.
          <br />
        </p>
      </div>
    </>
  );
}
