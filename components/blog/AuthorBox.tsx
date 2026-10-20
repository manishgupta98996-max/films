import Link from "next/link";
import Image from "next/image";
import { INSTRUCTOR } from "@/lib/config";

interface AuthorBoxProps {
  authorName?: string;
}

export default function AuthorBox({ authorName }: AuthorBoxProps) {
  const name = authorName || INSTRUCTOR.name;

  return (
    <div className="my-10 rounded-2xl border border-light-muted/20 bg-light-surface p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6">
      {/* Avatar / Photo */}
      {INSTRUCTOR.photoUrl ? (
        <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-sm bg-zinc-900 relative">
          <Image
            src={INSTRUCTOR.photoUrl}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-800 font-bold text-xl">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      )}

      <div className="flex-1 text-center sm:text-left space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <h4 className="text-lg font-bold text-light-text">
            Written by {name}
          </h4>
          {INSTRUCTOR.title && (
            <span className="text-xs font-semibold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded self-center sm:self-auto">
              {INSTRUCTOR.title}
            </span>
          )}
        </div>

        <p className="text-sm text-light-muted leading-relaxed">
          {INSTRUCTOR.bio}
        </p>

        <div className="pt-1">
          <Link
            href="/about"
            className="text-xs font-bold text-amber-800 hover:text-amber-900 underline inline-flex items-center gap-1"
          >
            Read Dan&apos;s Full Story &amp; Production Background →
          </Link>
        </div>
      </div>
    </div>
  );
}
