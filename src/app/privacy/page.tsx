import { Header, Footer } from "@/components/system";
import { privacyPageContent } from "@/presentation";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  const { hero, lastUpdate, sections, contact, footer } = privacyPageContent;

  return (
    <div className="min-h-screen bg-[#000] ">
      <Header />
      <section className="relative py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#d5fe46] mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {hero.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {hero.subtitleLabel}{" "}
              {new Date(lastUpdate).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-[#121212]/70 backdrop-blur-lg rounded-t-xl p-8 md:p-12 shadow-sm space-y-8 ">
                {sections.map((section) => (
                  <div key={section.id}>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {section.title}
                    </h2>
                    {section.paragraphs?.map((paragraph, index) => (
                      <p
                        key={`${section.id}-paragraph-${index}`}
                        className="text-white/60 leading-relaxed mb-3 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc list-inside space-y-2 text-white/60 ml-4">
                        {section.bullets.map((bullet, index) => (
                          <li key={`${section.id}-bullet-${index}`}>
                            {bullet.strong ? (
                              <>
                                <strong>{bullet.strong}</strong>
                                {bullet.text ? <> {bullet.text}</> : null}
                                {bullet.note ? (
                                  <>
                                    {" "}
                                    <em>{bullet.note}</em>
                                  </>
                                ) : null}
                              </>
                            ) : (
                              bullet.text
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.closing ? (
                      <p className="text-white/60 leading-relaxed mt-3">
                        {section.closing}
                      </p>
                    ) : null}
                    {section.id === "contact" ? (
                      <div className="mt-4 p-4 bg-[#121212]/50 rounded-lg">
                        <p className="text-white/70">
                          <strong>{contact.email.label}:</strong>{" "}
                          <a
                            href={`mailto:${contact.email.value}`}
                            className="text-white hover:underline"
                          >
                            {contact.email.value}
                          </a>
                        </p>
                        <p className="text-white/60 mt-2">
                          <strong>{contact.instagram.label}:</strong>{" "}
                          <a
                            href={contact.instagram.href}
                            className="text-white hover:underline"
                          >
                            {contact.instagram.value}
                          </a>
                        </p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="rounded-b-xl p-4 bg-[#121212]">
                <p className="text-sm text-white/50 text-center">{footer}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
