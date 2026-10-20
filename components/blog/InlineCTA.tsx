import CheckoutButton from "../CheckoutButton";
import { COURSE_TITLE, COURSE_PRICE } from "@/lib/config";

interface InlineCTAProps {
  headline?: string;
  description?: string;
}

export default function InlineCTA({
  headline = `Master the Full Pipeline in ${COURSE_TITLE}`,
  description = "Learn how to script, direct, voice, score, and edit a finished 1-hour AI film with over 10+ hours of step-by-step video training.",
}: InlineCTAProps) {
  return (
    <div className="my-10 rounded-2xl border-2 border-accent/40 bg-gradient-to-br from-light-surface via-amber-500/5 to-light-surface p-6 sm:p-8 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-800">
            Recommended Training
          </span>
          <h4 className="text-xl sm:text-2xl font-extrabold text-light-text">
            {headline}
          </h4>
          <p className="text-sm sm:text-base text-light-muted max-w-xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex-shrink-0">
          <CheckoutButton
            label={`Get AI Filmmaking Pro: $${COURSE_PRICE}`}
            className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-accent/20"
          />
        </div>
      </div>
    </div>
  );
}
