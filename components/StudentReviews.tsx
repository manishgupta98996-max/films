import Image from "next/image";
import { studentReviews } from "@/lib/config";

export default function StudentReviews() {
  const approvedReviews = studentReviews.filter(
    (review) => review.permission === true && Boolean(review.text && review.name)
  );

  if (approvedReviews.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#D64700] mb-2">
            Student Proof &amp; Community Feedback
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Trusted by indie directors &amp; creators
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3">
            Real feedback from filmmakers who have applied our generative workflows to script, shoot, and edit their films.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold">
            <span className="text-amber-500 font-black">★★★★★</span>
            <span>4.9/5 Average Rating Across 140+ Students</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {approvedReviews.map((review) => (
            <div
              key={review.id || review.name}
              className="rounded-3xl border border-neutral-200/90 bg-[#FAF9F6] p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top: Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500 font-bold text-sm tracking-widest">
                    {"★".repeat(review.rating || 5)}
                  </div>
                  <span className="text-xs text-neutral-600 font-mono">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-neutral-800 text-[15px] sm:text-base leading-relaxed mb-6 font-medium">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Film Project Tag if present */}
                {review.filmTitle && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-700 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00]" />
                    <span>Project: {review.filmTitle}</span>
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-neutral-200/80 flex items-center gap-3">
                {review.avatar ? (
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-300 shadow-2xs flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-neutral-200 text-neutral-700 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-extrabold text-neutral-900 truncate">
                    {review.name}
                  </p>
                  <p className="text-xs text-neutral-600 truncate">
                    {review.role || review.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
