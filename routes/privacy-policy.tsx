import { Head } from "$fresh/runtime.ts";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Privacy Policy</h1>
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
          We share your information with the following third parties:
        </p>
        <ul>
          <li>
            Service providers who help us operate our website and services, such
            as our deployment platform and email provider.
          </li>
        </ul>
        <h2 class="text-xl font-bold mt-4">Your Choices</h2>
        <p>
          As the only data we collect is that which your explicitly provide to
          us, and used exclusivly to enable our website the only way to limit
          our data collection is by refraining the use of our website.
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
