import SectionHeading from '../components/SectionHeading'
import FadeIn from '../components/FadeIn'
import { aboutContent } from '../data/about'

export default function About() {
  const { eyebrow, title, description, greeting, overview, facilityImage } =
    aboutContent

  return (
    <section id="about" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 대표 인사말 */}
          <FadeIn className="lg:col-span-1">
            <div className="border-l-2 border-sky-500 pl-6 sm:pl-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-600">
                {greeting.title}
              </p>
              <blockquote className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                {greeting.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                ))}
              </blockquote>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="font-semibold text-slate-900">{greeting.name}</p>
                <p className="mt-1 text-sm text-slate-500">{greeting.position}</p>
              </div>
            </div>
          </FadeIn>

          {/* 회사 개요 */}
          <FadeIn className="lg:col-span-1">
            <div className="rounded-sm border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">
                {overview.title}
              </h3>
              <dl className="mt-6 divide-y divide-slate-200">
                {overview.items.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-3 gap-4 py-4 first:pt-0 last:pb-0 sm:grid-cols-[120px_1fr]"
                  >
                    <dt className="text-sm font-medium text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="col-span-2 text-sm leading-relaxed text-slate-800">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>

        {/* 회사 전경 이미지 */}
        <FadeIn className="mt-16">
          <figure className="overflow-hidden rounded-sm">
            <div className="aspect-[21/9] w-full overflow-hidden bg-slate-200">
              <img
                src={facilityImage.src}
                alt={facilityImage.alt}
                // className="h-full w-full object-cover transition-opacity duration-500 hover:opacity-95"
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.01]"
              />
            </div>
            {facilityImage.caption && (
              <figcaption className="mt-3 text-center text-sm text-slate-500">
                {facilityImage.caption}
              </figcaption>
            )}
          </figure>
        </FadeIn>
      </div>
    </section>
  )
}
