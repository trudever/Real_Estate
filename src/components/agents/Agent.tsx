import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { Agent, SocialMedia } from '../../@types/types'
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../../lib/sanity"


const socialMediaIcons = {
  linkedIn: "/icons/linkedin_icon.svg",
  instagram: "/icons/instagram_icon.svg",
  skype: "/icons/skype_icon.svg",
  pinterest: "/icons/pinterest_icon.svg"
}

function AgentComponent({ name, profileImage, slug, socialMedia, role, likedBy }: Agent) {
  const imageProps = useNextSanityImage(
    sanityClient,
    profileImage
  )

  return (
    <Link href={`/${slug}`}>
      <div className="py-8 flex flex-col items-center space-y-2 border border-[#D3DEE8]  shadow-sm hover:border-primary-light cursor-pointer rounded-[4px]">
        <div className='h-16 w-16 relative rounded-full'>
          <Image {...imageProps} objectFit='cover' layout='fill' className="rounded-full" />
        </div>
        <h2 className='font-semibold text-base'>{name}</h2>
        <p className='text-sm text-[#7B7B7B]'>{role}</p>
        <div className='flex space-x-4 items-center'>
          {/* instagram */}
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4.20703C5.75 4.20703 3.95703 6.03516 3.95703 8.25C3.95703 10.5 5.75 12.293 8 12.293C10.2148 12.293 12.043 10.5 12.043 8.25C12.043 6.03516 10.2148 4.20703 8 4.20703ZM8 10.8867C6.55859 10.8867 5.36328 9.72656 5.36328 8.25C5.36328 6.80859 6.52344 5.64844 8 5.64844C9.44141 5.64844 10.6016 6.80859 10.6016 8.25C10.6016 9.72656 9.44141 10.8867 8 10.8867ZM13.1328 4.06641C13.1328 3.53906 12.7109 3.11719 12.1836 3.11719C11.6562 3.11719 11.2344 3.53906 11.2344 4.06641C11.2344 4.59375 11.6562 5.01562 12.1836 5.01562C12.7109 5.01562 13.1328 4.59375 13.1328 4.06641ZM15.8047 5.01562C15.7344 3.75 15.4531 2.625 14.5391 1.71094C13.625 0.796875 12.5 0.515625 11.2344 0.445312C9.93359 0.375 6.03125 0.375 4.73047 0.445312C3.46484 0.515625 2.375 0.796875 1.42578 1.71094C0.511719 2.625 0.230469 3.75 0.160156 5.01562C0.0898438 6.31641 0.0898438 10.2188 0.160156 11.5195C0.230469 12.7852 0.511719 13.875 1.42578 14.8242C2.375 15.7383 3.46484 16.0195 4.73047 16.0898C6.03125 16.1602 9.93359 16.1602 11.2344 16.0898C12.5 16.0195 13.625 15.7383 14.5391 14.8242C15.4531 13.875 15.7344 12.7852 15.8047 11.5195C15.875 10.2188 15.875 6.31641 15.8047 5.01562ZM14.1172 12.8906C13.8711 13.5938 13.3086 14.1211 12.6406 14.4023C11.5859 14.8242 9.125 14.7188 8 14.7188C6.83984 14.7188 4.37891 14.8242 3.35938 14.4023C2.65625 14.1211 2.12891 13.5938 1.84766 12.8906C1.42578 11.8711 1.53125 9.41016 1.53125 8.25C1.53125 7.125 1.42578 4.66406 1.84766 3.60938C2.12891 2.94141 2.65625 2.41406 3.35938 2.13281C4.37891 1.71094 6.83984 1.81641 8 1.81641C9.125 1.81641 11.5859 1.71094 12.6406 2.13281C13.3086 2.37891 13.8359 2.94141 14.1172 3.60938C14.5391 4.66406 14.4336 7.125 14.4336 8.25C14.4336 9.41016 14.5391 11.8711 14.1172 12.8906Z" fill="#2A2C30" />
          </svg>

          {/* linkedin */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
            <path d="M3.64062 16V5.48828H0.371094V16H3.64062ZM1.98828 4.08203C3.04297 4.08203 3.88672 3.20312 3.88672 2.14844C3.88672 1.12891 3.04297 0.285156 1.98828 0.285156C0.96875 0.285156 0.125 1.12891 0.125 2.14844C0.125 3.20312 0.96875 4.08203 1.98828 4.08203ZM15.8398 16H15.875V10.2344C15.875 7.42188 15.2422 5.24219 11.9375 5.24219C10.3555 5.24219 9.30078 6.12109 8.84375 6.92969H8.80859V5.48828H5.67969V16H8.94922V10.7969C8.94922 9.42578 9.19531 8.125 10.8828 8.125C12.5703 8.125 12.6055 9.67188 12.6055 10.9023V16H15.8398Z" fill="#2A2C30" />
          </svg>

          {/* pinterest */}
          <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.42188 0.496094C3.80078 0.496094 0.25 2.88672 0.25 6.78906C0.25 9.25 1.62109 10.6562 2.46484 10.6562C2.81641 10.6562 3.02734 9.70703 3.02734 9.42578C3.02734 9.10938 2.18359 8.40625 2.18359 7.03516C2.18359 4.22266 4.32812 2.21875 7.10547 2.21875C9.53125 2.21875 11.2891 3.58984 11.2891 6.08594C11.2891 7.94922 10.5508 11.4297 8.125 11.4297C7.24609 11.4297 6.47266 10.7969 6.47266 9.91797C6.47266 8.58203 7.42188 7.28125 7.42188 5.91016C7.42188 3.58984 4.11719 4.01172 4.11719 6.82422C4.11719 7.42188 4.1875 8.05469 4.46875 8.61719C3.97656 10.6914 2.99219 13.8203 2.99219 15.9648C2.99219 16.6328 3.0625 17.2656 3.13281 17.9336C3.23828 18.0742 3.20312 18.0742 3.37891 18.0039C5.13672 15.5781 5.10156 15.0859 5.875 11.9219C6.33203 12.7305 7.42188 13.1875 8.33594 13.1875C12.0625 13.1875 13.75 9.53125 13.75 6.26172C13.75 2.78125 10.7266 0.496094 7.42188 0.496094Z" fill="#2A2C30" />
          </svg>

        </div>
      </div>
    </Link>

  )
}

export default AgentComponent