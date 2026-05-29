import FadeIn from '../components/FadeIn'
import SectionHeading from '../components/SectionHeading'
import { historyContent } from '../data/history'

export default function History() {
  const sortedItems = [...historyContent.items].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year
    return a.month - b.month
  })

  return (
    <section id="history" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={historyContent.eyebrow}
            title={historyContent.title}
            description={historyContent.description}
          />
        </FadeIn>

        <div className="mt-14 rounded-sm border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <ol className="space-y-6">
            {sortedItems.map((item) => (
              <FadeIn key={item.id}>
                <li className="grid gap-4 border-b border-slate-200 pb-6 last:border-b-0 last:pb-0 md:grid-cols-[140px_1fr]">
                  <p className="text-sm font-semibold text-sky-700">{item.dateLabel}</p>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">협력사: {item.partner}</p>
                    {item.website ? (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block text-xs text-slate-500 transition-colors hover:text-sky-600"
                      >
                        홈페이지 보기
                      </a>
                    ) : (
                      <p className="mt-2 text-xs text-slate-500">홈페이지 정보 준비 중</p>
                    )}
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
