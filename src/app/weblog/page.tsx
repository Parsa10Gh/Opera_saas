import Weblog from '@/components/weblog/Weblog'
import { blogPosts } from '@/helper/data'
import React from 'react'

const page = () => {
  return (
    <Weblog blogPosts={blogPosts}/>
  )
}

export default page