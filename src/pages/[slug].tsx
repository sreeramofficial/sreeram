import React, { useEffect } from 'react';
import config from '@/config';
import { useRouter } from 'next/router';
import _get from 'lodash/get';

const Index = ({ img, firstRoute }) => {
  const router = useRouter();

  useEffect(() => {
    if(firstRoute) setTimeout(() => router.push(firstRoute), 500);
  }, [ firstRoute ]);

  return (
    <img className='img img--center' title='blog' loading='lazy' alt='blog' src={img} height='200' width='375' />
  );
};

Index.defaultProps = {
  img: '',
};

/* istanbul ignore next */
export const getServerSideProps = async ({ query: { slug = '' } }) => {
  const { sections } = config;

  if (!sections[slug]) return {
    redirect: {
      destination: '/404',
    },
  };

  return {
    props: {
      img: sections[slug].img,
      firstRoute: _get(sections, [ slug, 'links', '0', 'route' ], null),
    },
  };
};

export default Index;
