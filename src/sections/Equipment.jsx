import SectionHeading from "../components/SectionHeading";
import FadeIn from "../components/FadeIn";
import { equipmentContent } from "../data/equipment";

function EquipmentCategory({ category }) {
  return (
    // <article className="rounded-sm border border-slate-200 bg-white p-6 sm:p-7">
    <article
      id={`equipment-${category.id}`}
      className="scroll-mt-24 rounded-sm border border-slate-200 bg-white p-6 sm:p-7"
    >
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">
            {category.nameEn}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {category.nameKo}
          </h3>
        </div>
        {/* <p className="text-xs text-slate-500">
          보유 이미지 {category.images.length}개
        </p> */}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-slate-600">
        {category.description}
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div
          className={`grid gap-4 ${
            category.images.length > 1 ? "sm:grid-cols-2" : ""
          }`}
        >
          {category.images.map((image) => (
            <figure
              key={`${category.id}-${image.src}`}
              className="group h-fit overflow-hidden rounded-sm border border-slate-200 bg-slate-100"
            >
              <div className="overflow-hidden">
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
        <div className="flex flex-col gap-4">
          {category.tableData && (
            <div className="h-fit overflow-hidden rounded-sm border border-slate-200 bg-slate-50 self-start">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left">모델명</th>
                    <th className="px-4 py-3 text-left">규격</th>
                    <th className="px-4 py-3 text-left">제작회사</th>
                    <th className="whitespace-nowrap px-4 py-3 text-left">
                      수량
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {category.tableData.map((item) => (
                    <tr key={item.model} className="border-t border-slate-200">
                      <td className="px-4 py-3">{item.model}</td>
                      <td className="px-4 py-3">{item.spec}</td>
                      <td className="px-4 py-3">{item.maker}</td>
                      <td className="whitespace-nowrap px-4 py-3">
                        {item.count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {category.specs?.length > 0 && (
            <div className="h-fit rounded-sm border border-slate-200 bg-slate-50 p-5">
              <dl className="divide-y divide-slate-200">
                {category.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-[120px_1fr] gap-4 py-3"
                  >
                    <dt className="text-sm font-medium text-slate-500">
                      {spec.label}
                    </dt>

                    <dd className="text-sm text-slate-800">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Equipment() {
  const { eyebrow, title, description, technologies, categories } =
    equipmentContent;

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
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {tech.name}
                </h3>
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
  );
}
