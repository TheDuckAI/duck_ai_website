import Link from './Link'
import Image from './Image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          {/* <SocialIcon kind="discord" href={siteMetadata.discord} size="6" /> */}
          {/* <>
            <a
              className="text-sm text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href={'https://discord.gg/myhu5pAEX7'}
          >
            <span className="sr-only">{kind}</span>
            <Image 
            Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
              width={8}
              height={8}
              />
            </Link>
          </a>
        </> */}

          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href={'https://discord.gg/myhu5pAEX7'}
          >
            {/* TODO - Discord logo-white on */}
            <Image
              alt="discord"
              src="/../public/static/images/discord.png"
              className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${8} w-${8}`}
              href="https://discord.gg/myhu5pAEX7"
              aria-label={`Link to discord`}
              width={40}
              height={40}
            />
            {/* <Image
              alt={title}
              src={imgSrc}
              className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
              width={8}
              height={8}
              /> */}
          </a>

          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" /> */}
          {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" /> */}
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" /> */}
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 pb-10 text-sm text-gray-500 dark:text-gray-400 ">
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
