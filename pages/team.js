import ProfileCard from '@/components/ProfileCard'
import { PageSEO } from '@/components/SEO'
import peopleData from '@/data/peopleData'

export default function Team() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h3 className="text-center text-3xl  font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            The DuckAI Team
          </h3>
          <p className=" text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            Updates coming soon ...
          </p>
        </div>
        <section className="bg-white dark:bg-gray-900">
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
            {peopleData.map((p) => (
              <ProfileCard
                key={p.name}
                name={p.name}
                // description={p.description}
                imgSrc={p.imgSrc}
                github={p.github}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
