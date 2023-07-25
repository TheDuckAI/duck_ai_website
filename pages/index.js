import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="flex flex-col items-center">
            {/* <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"></span> */}
            <Image alt="avatar" src="/static/images/avatar.png" width={256} height={256} />
          </div>
          <h1 className="flex flex-col items-center  text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            DuckAI
          </h1>
          <div>
            <p className="flex flex-col items-center text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
          <div>
            <hr className="color-gray-100 my-4 h-0.5 border-t-2 opacity-100 dark:opacity-50" />

            <div className="mb-8 items-start space-y-2 px-7">
              <div className="font-size text-md mb-4 flex flex-col items-center ">
                <div className="max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
                  <p>
                    DuckAI is an open and scalable academic lab and open-source community working on
                    various Machine Learning projects. Our team consists of researchers from the
                    Georgia Institute of Technology and beyond, driven by our passion for
                    investigating large language models and multimodal systems.
                  </p>
                </div>

                <div className=" mb-8 dark:prose-dark">
                  <p>
                    Our present endeavors concentrate on the development and analysis of a variety
                    of dataset projects, with the aim of comprehending the depth and performance of
                    these models across diverse domains.{' '}
                  </p>
                </div>

                <div className="mb-8 dark:prose-dark">
                  <p>
                    Our objective is to welcome people with a variety of backgrounds to cutting-edge
                    ML projects and rapidly scale up our community to make an impact on the ML
                    landscape.{' '}
                  </p>
                </div>

                <div className="mb-8 dark:prose-dark">
                  <p>
                    We are particularly devoted to open-sourcing datasets that can turn into an
                    important infrastructure for the community and exploring various ways to improve
                    the design of foundation models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
