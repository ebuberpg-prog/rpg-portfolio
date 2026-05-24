import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for EbubeRPG — motion design and art direction studio.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex w-full flex-col px-5 pt-32 pb-24 sm:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <header className="mb-20 flex flex-col gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
              Legal
            </p>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-[#888888]">
              Last updated: May 24, 2026
            </p>
          </header>
        </Reveal>

        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-[#cccccc]">
          <Reveal>
            <section>
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">
                Information We Collect
              </h2>
              <p>
                This application accesses your Pinterest boards to download images
                for personal storage and use. We collect board metadata (names,
                pin counts) and image files that you choose to download from your
                own Pinterest account.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">
                How We Use Information
              </h2>
              <p>
                Images downloaded from Pinterest are stored in Cloudflare R2
                storage for use within this application. Pinterest credentials are
                used solely to authenticate your Pinterest account and access your
                boards at your direction.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">
                Data Storage
              </h2>
              <p>
                All image assets are stored privately in Cloudflare R2 and are
                not publicly accessible. Stored images are used only for personal
                purposes within the application and are not shared with any third
                parties.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">
                Cookies and Tracking
              </h2>
              <p>
                This application does not use cookies or tracking technologies.
                No analytics or third-party tracking scripts are employed.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">
                Third-Party Services
              </h2>
              <p>
                We use the following third-party services: Pinterest (board API
                access), Cloudflare R2 (image storage), and Vercel (website
                hosting). Each service&apos;s privacy policy governs its handling of
                your data.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">
                Contact
              </h2>
              <p>
                For questions about this privacy policy, reach out via the contact
                form on this website or open an issue on the project GitHub
                repository.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
}