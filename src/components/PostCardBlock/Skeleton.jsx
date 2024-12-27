import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (props) => (
  <div className="postCard-block-wrapper">
  <div className="postCard-block">
  <ContentLoader 
    speed={2}
    width={280}
    height={486}
    viewBox="0 0 280 486"
    backgroundColor="#ededed"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-2" y="5" rx="0" ry="0" width="277" height="260" /> 
    <rect x="70" y="281" rx="0" ry="0" width="122" height="14" /> 
    <rect x="7" y="428" rx="0" ry="0" width="87" height="22" /> 
    <rect x="116" y="420" rx="25" ry="25" width="158" height="39" /> 
    <rect x="6" y="314" rx="5" ry="5" width="273" height="89" />
  </ContentLoader>
  </div>
</div>
);
