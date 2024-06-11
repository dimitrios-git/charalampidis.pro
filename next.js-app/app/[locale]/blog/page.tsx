// @/app/[locale]/blog/page.tsx

import React from 'react';
import MyNextUIHeader from '@/app/ui/headers/myNextUIHeader';
import BlogMain from '@/app/ui/mains/blogMain';
import MyNextUIFooter from '@/app/ui/footers/myNextUIFooter';

interface BlogProps {
  params: { locale: string };
}

const Blog = ({ params: { locale } }: BlogProps) => {
  return (
    <>
      <MyNextUIHeader />
      <BlogMain />
      <MyNextUIFooter />
    </>
  );
};

export default Blog;
