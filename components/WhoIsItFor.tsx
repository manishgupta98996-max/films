export default function WhoIsItFor() {
  const forWho = [
    {
      title: "You have a story you want to tell",
      desc: "And you're tired of not having the tools or team to tell it.",
    },
    {
      title: "You're a YouTube creator who wants longer content",
      desc: "Short clips don't hold watch time. Films do.",
    },
    {
      title: "You're willing to actually finish something",
      desc: "The pipeline works. You have to follow it.",
    },
  ];

  const notForWho = [
    {
      title: "You want a passive income shortcut",
      desc: "This is filmmaking. It takes creative work.",
    },
    {
      title: "You're looking for a content automation tool",
      desc: "We're making films, not bulk-scheduling posts.",
    },
    {
      title: "You expect the AI to do everything",
      desc: "You're the director. The AI is your crew.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* CHANGE 14 - "Who it's for" section heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            This course is for you if you&apos;re done making clips.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YES column */}
          <div className="rounded-3xl border border-emerald-200 bg-[#F0FDF4] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-200">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                ✓
              </span>
              {/* CHANGE 14 - YES column heading */}
              <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
                You&apos;re the right fit if:
              </h3>
            </div>
            <ul className="space-y-6">
              {forWho.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-700 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* NO column */}
          <div className="rounded-3xl border border-rose-200 bg-[#FFF1F2] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-200">
              <span className="w-8 h-8 rounded-full bg-rose-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                ✕
              </span>
              {/* CHANGE 14 - NO column heading */}
              <h3 className="text-lg sm:text-xl font-bold text-rose-950">
                This isn&apos;t for you if:
              </h3>
            </div>
            <ul className="space-y-6">
              {notForWho.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-rose-700 font-bold text-lg mt-0.5">✕</span>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-neutral-700 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
