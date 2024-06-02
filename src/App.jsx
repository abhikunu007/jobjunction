import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListing from './components/JobListing'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
   <>
    <Navbar/>
    <Hero title="Find your Jobs Here" subtitle="Find the best job that fits your skills and needs."/>
    
    <HomeCards/>
    
    <JobListing/>

    <ViewAllJobs/>
   </>
  )
}

export default App