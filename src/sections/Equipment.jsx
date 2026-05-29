import SectionHeading from '../components/SectionHeading'
import FadeIn from '../components/FadeIn'
import { equipmentContent } from '../data/equipment'

function EquipmentCategory({ category }) {
  return (
    <article className="rounded-sm border border-slate-200 bg-white p-6 sm:p-7">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">
            {category.nameEn}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {category.nameKo}
          </h3>
        </div>
        <p className="text-xs text-slate-500">보유 이미지 {category.images.length}개</p>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-slate-600">
        {category.description}
      </p>

      {category.specs.length > 0 && (
        <dl className="mt-6 grid gap-2 rounded-sm bg-slate-50 p-4 sm:grid-cols-2">
          {category.specs.map((spec) => (
            <div key={spec.label} className="flex items-start justify-between gap-4 text-sm">
              <dt className="shrink-0 text-slate-500">{spec.label}</dt>
              <dd className="text-right font-medium text-slate-800">{spec.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.images.map((image) => (
          <figure
            key={`${category.id}-${image.src}`}
            className="group overflow-hidden rounded-sm border border-slate-200 bg-slate-100"
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <figcaption className="border-t border-slate-200 bg-white px-3 py-2 text-xs text-slate-500">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  )
}

export default function Equipment() {
  const { eyebrow, title, description, technologies, categories } = equipmentContent

  return (
    <section id="equipment" className="scroll-mt-20 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {technologies.map((tech) => (
            <FadeIn key={tech.id}>
              <article className="rounded-sm border border-slate-200 bg-white p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">
                  {tech.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{tech.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tech.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          {categories.map((category) => (
            <FadeIn key={category.id}>
              <EquipmentCategory category={category} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
