import PersonalCard from '@/components/Personal_card'
import { PageSEO } from '@/components/SEO'
import peopleData from '@/data/peopleData'

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            The Duck AI Team
          </h3>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Updates coming soon</p>
        </div>
        <div className="container py-12">
          {/* <div className="-m-4 flex flex-wrap ">
            {peopleData.map((p) => (
              <PersonalCard
                key={p.name}
                name={p.name}
                description={p.description}
                imgSrc={p.imgSrc}
              />
            ))}
          </div> */}
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {peopleData.map((p) => (
              <PersonalCard
                key={p.name}
                name={p.name}
                description={p.description}
                imgSrc={p.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
