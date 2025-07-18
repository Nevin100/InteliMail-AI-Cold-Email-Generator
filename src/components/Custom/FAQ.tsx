import {
  Sparkles,
  Wand2,
  Bot,
  PencilLine,
  Settings2,
  HelpCircle,
} from "lucide-react";

const faq = [
  {
    icon: Sparkles,
    question: "What exactly does this email generator do?",
    answer:
      "It creates professional, human-like cold email drafts tailored to your role, company type, and skills using AI—no templates, just smart personalization.",
  },
  {
    icon: Wand2,
    question: "Do I need any prior experience with email writing?",
    answer:
      "Not at all. Just describe the opportunity or product and let the AI handle tone, structure, and personalization for you.",
  },
  {
    icon: Bot,
    question: "Is the content generated unique every time?",
    answer:
      "Yes, the AI generates a unique email each time based on your input, making every message feel custom and non-repetitive.",
  },
  {
    icon: PencilLine,
    question: "Can I customize the generated email further?",
    answer:
      "Absolutely! You can edit and fine-tune the output directly to better match your voice or audience preferences.",
  },
  {
    icon: Settings2,
    question: "What inputs do I need to provide?",
    answer:
      "Just enter details like role, company type, position offered, type of position, your skills, projects, and a few personal traits—done!",
  },
  {
    icon: HelpCircle,
    question: "Who can benefit from this tool?",
    answer:
      "Freelancers, job seekers, founders, agencies—anyone who sends outreach emails and wants to stand out with high-conversion messages.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <div className="flex flex-col">
          <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 xs:text-lg text-center text-muted-foreground">
            Quick answers to common questions about our AI-Email generator ✉️{" "}
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
