import React from 'react';
import { makeStyles } from '@material-ui/core';
import { 
  Markdown,
  Content,
  Navigation,
} from '@sreeram.io/alpha';
import { getSession } from '@auth0/nextjs-auth0';
import isbot from 'isbot';

import { getUserData } from '@/store/app/app.api';
import config from '@/config';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'scroll',
  },
  content: {
    maxWidth: 800,
    [theme.breakpoints.up('sm')]: {
      minWidth: 600,
      margin: 20,
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 800,
      margin: '20px auto',
    },
  },
}));

const Page = ({ content, navigationProps }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Content className={classes.content}>
        <>
          <Markdown>
            {content}
          </Markdown>
          <Navigation {...navigationProps} />
        </>
      </Content>
    </div>
  );
};

export default Page;

/* istanbul ignore next */
export const getServerSideProps = async ({ query: { slug = '', post = '' }, req, res }) => {
  const { sections } = config;
  const currentPath = `/${slug}/${post}`;
  const { paid: isPremiumRequired, auth: isAuthRequired } = sections[slug];
  const index = sections[slug].links.findIndex(link => link.route === currentPath);
  const isBot = isbot(req.headers['user-agent']);
  const session = await getSession(req, res);
  const isUserPremium = session ? (await getUserData(session.user.sub)).tier : false;

  if (isAuthRequired && !session && !isBot) return {
    redirect: {
      destination: `/login?redirectTo=${currentPath}`,
      permanent: false,
    },
  };

  if (isPremiumRequired && !isUserPremium && !isBot) return {
    redirect: {
      destination: '/premium',
      permanent: false,
    },
  };

  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      content: require(`src/data${currentPath}.md`).default,
      navigationProps: {
        prev: sections[slug].links[index - 1] || null,
        next: sections[slug].links[index + 1] || null,
      },
    },
  };
};
