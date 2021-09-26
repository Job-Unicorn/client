import React from 'react'
import Head from 'next/head'

/**
 * 
 * ### SEO
 * 
 * This component is used to set the
 * SEO tags for the page.
 * 
 * ![SEO](https://i.imgur.com/gJPpM1w.png)
 * 
 * ---
 * 
 * #### Usage
 * 
 * ```js
 * import SEO from '@components/general/SEO'
 * 
 * <SEO title="My Page" />
 * ```
 * 
 */

const SEO = ({title} : {title : string}) => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

       
      <title>Job Unicorn — {title ? title : "The Best Job Search Tool on the Web."}</title>
      <meta name="title" content="Job Unicorn — The Best Job Search Tool on the Web."/>
      <meta name="description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position."/>


      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://jobunicorn.tech/"/>
      <meta property="og:title" content={"Job Unicorn — " + (title ? title : "The Best Job Search Tool on the Web.")}/>
      <meta property="og:description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position."/>
      <meta property="og:image" content="https://jobunicorn.tech/banner.png"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://jobunicorn.tech/"/>
      <meta property="twitter:title" content={"Job Unicorn — " + (title ? title : "The Best Job Search Tool on the Web.")}/>
      <meta property="twitter:description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position."/>
      <meta property="twitter:image" content="https://jobunicorn.tech/banner.png"></meta>
    </Head>
  )
}

export default SEO
