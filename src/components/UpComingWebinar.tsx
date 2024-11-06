"use client"
import Link from 'next/link';
import { Card } from './ui/card-hover-effect';
import { HoverEffect } from "./ui/card-hover-effect";

function UpComingWebinar() {

    const featuredWebinars = [
        {
          id: 1,  // Added a unique id
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          id: 2,
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          id: 3,
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          id: 4,
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        {
          id: 5,
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          id: 6,
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];

  return (
    <div className='p-12 bg-gray-900'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>
               
            <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map(webinar => ({
              key: webinar.id,  // Add unique key using the id
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`  // Update link to use specific slug
            }))}
          />
        </div>

            </div>
            <div className='mt-10 text-center'>
                <Link href={"/"} className="px-2 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All Webinars</Link>
            </div>
        </div>
  )
}

export default UpComingWebinar
