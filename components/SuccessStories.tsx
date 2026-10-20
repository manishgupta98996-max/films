import { successStories } from "@/lib/config";

export default function SuccessStories() {
  const showPlaceholders = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

  // Filter approved entries only (permission: true AND factsVerified: true)
  const approvedStories = successStories.filter(
    (story) =>
      story.permission === true &&
      story.factsVerified === true &&
      Boolean(story.name && story.whatTheyBuilt)
  );

  // Render nothing in production if no approved entries
  if (approvedStories.length === 0 && !showPlaceholders) {
    return null;
  }

  return (
    <section className="bg-light-bg text-light-text py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-light-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-800 mb-2">
            Creator Milestones
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-light-text mb-3 [text-wrap:balance]">
            Student Success Stories
          </h2>
          <p className="text-[17px] text-light-muted">
            Verified films and channels launched by students applying the end-to-end AI film architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedStories.map((story) => (
            <div
              key={story.id || story.name + story.channelHandle}
              className="rounded-2xl border border-light-muted/20 bg-light-surface p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-emerald-800 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Verified Project
                  </span>
                  <span className="text-xs text-light-muted">
                    {story.channelHandle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-light-text mb-2">
                  {story.name}
                </h3>
                <p className="text-[15px] font-semibold text-amber-800 mb-3">
                  Built: {story.whatTheyBuilt}
                </p>
                <p className="text-[17px] text-light-muted leading-relaxed">
                  {story.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
