import Image from "next/image";
import { INSTRUCTOR } from "@/lib/config";

export default function Instructor() {
  const hasPhoto = Boolean(INSTRUCTOR.photoUrl && INSTRUCTOR.photoUrl.trim().length > 0);

  return (
    <section id="instructor" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* CHANGE 12 - Instructor section heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight [text-wrap:balance]">
            Your instructor: Dan Kieft
          </h2>
        </div>

        {/* Instructor Card */}
        <div className="rounded-3xl border border-neutral-200/90 bg-[#FAF9F6] p-6 sm:p-10 shadow-md flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          {hasPhoto && (
            <div className="flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#FF5B00]/40 shadow-xl bg-neutral-950 relative">
              <Image
                src={INSTRUCTOR.photoUrl!}
                alt="Dan Kieft"
                width={176}
                height={176}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          )}

          {/* Details */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                Dan Kieft
              </h3>
              {/* CHANGE 12 - Credential line */}
              <p className="text-sm sm:text-base font-bold text-[#D64700] mt-1">
                Generative Video Producer · AI Filmmaker · Course Director
              </p>
            </div>

            {/* CHANGE 12 - Instructor body text */}
            <div className="text-neutral-700 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                Dan has been working inside generative video pipelines since the tools first appeared, not as a hobbyist, but as a producer who needed them to actually work on real projects.
              </p>
              <p>
                Every lesson in this course is a walkthrough of a tool or technique Dan has tested, broken, fixed, and used to finish a real film. No filler modules, no theory for its own sake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
