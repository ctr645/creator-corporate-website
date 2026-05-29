import SectionHeading from '../components/SectionHeading'
import FadeIn from '../components/FadeIn'
import { partnersContent } from '../data/partners'

function PartnerCard({ partner }) {
  return (
    <article className="group flex flex-col items-center rounded-sm border border-slate-700/60 bg-slate-800/50 p-6 text-center transition-colors duration-300 hover:border-sky-500/40 hover:bg-slate-800">
      {partner.image ? (
        <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-sm bg-white/95 px-4">
          <img
            src={partner.image}
            alt={`${partner.name} 로고`}
            className="max-h-14 w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      ) : (
        <div className="flex h-20 w-full items-center justify-center rounded-sm border border-dashed border-slate-600 bg-slate-900/40 px-4">
          <span className="text-xs text-slate-400">로고 이미지 준비 중</span>
        </div>
      )}
      <h3 className="mt-5 text-base font-semibold text-white">{partner.name}</h3>
      <p className="mt-2 text-sm text-slate-400">{partner.description}</p>
      {partner.website ? (
        <a
          href={partner.website}
          target="_blank"
          rel="noreferrer"
          className="mt-4 text-xs text-slate-500 transition-colors hover:text-sky-400"
        >
          홈페이지 보기
        </a>
      ) : null}
    </article>
  )
}

export default function Partners() {
  const { eyebrow, title, description, items } = partnersContent

  return (
    <section
      id="partners"
      className="scroll-mt-20 bg-brand-steel py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            dark
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((partner) => (
            <FadeIn key={partner.id}>
              <PartnerCard partner={partner} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
