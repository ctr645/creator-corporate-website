import SectionHeading from "../components/SectionHeading";
import FadeIn from "../components/FadeIn";
import { productsContent } from "../data/products";

function ProductCard({ item }) {
  return (
    <article
      id={`product-${item.id}`}
      className="group scroll-mt-24 overflow-hidden rounded-sm border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-md"
    >
      <div className="grid md:grid-cols-[1fr_1fr]">
        <div className="overflow-hidden bg-slate-100 md:min-h-[240px]">
          {item.images ? (
            <div className="grid h-[300px] grid-cols-3 bg-slate-100">
              {item.images.map((image, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center border-r border-slate-200 last:border-r-0"
                >
                  <img
                    src={image}
                    alt={`${item.name}-${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="aspect-[4/3] md:h-full">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-600">
            {item.category}
          </p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">{item.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {item.description}
          </p>
          {item.applications?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.applications.map((app) => (
                <li
                  key={app}
                  className="rounded-sm bg-slate-100 px-3 py-1 text-xs text-slate-600"
                >
                  {app}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  const { eyebrow, title, description, items } = productsContent;

  return (
    <section id="products" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>

        <div className="mt-16 space-y-8">
          {items.map((item) => (
            <FadeIn key={item.id}>
              <ProductCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
