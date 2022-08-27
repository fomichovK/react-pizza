import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader: React.FC = (props) => (
  <ContentLoader
    speed={1}
    width={260}
    height={480}
    viewBox='0 0 260 480'
    backgroundColor='#f3f3f3'
    foregroundColor='#dfdddd'
    {...props}>
    <rect x='0' y='160' rx='3' ry='3' width='260' height='0' />
    <circle cx='133' cy='123' r='123' />
    <rect x='10' y='308' rx='10' ry='10' width='240' height='110' />
    <rect x='10' y='439' rx='10' ry='10' width='82' height='27' />
    <rect x='102' y='432' rx='20' ry='20' width='145' height='40' />
    <rect x='10' y='276' rx='10' ry='10' width='240' height='18' />
  </ContentLoader>
);

export default MyLoader;
