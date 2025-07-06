import React, { useState, useCallback, useEffect } from 'react';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = () => {
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.github.com/repos/mldangelo/personal-site',
    );
    const resData = await res.json();
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div>
        <div>
          <h3><span>2025 &ndash; Present</span></h3>
          <ul>
            <li><span>Launched </span><strong>AI-aided video</strong><span> production pipeline</span></li>
            <li><span>Increased lead pipeline by </span><strong>20% (via dripify campaign etc.)</strong></li>
            <li><span>Optimized product listing marketplace SEO</span></li>
          </ul>
          <h3><span>2024 &ndash; 2025</span></h3>
          <ul>
            <li><span>Produced </span><strong>300+ AI-assisted infographics</strong></li>
            <li><span>Published AI-tools comparison blog series</span></li>
            <li><span>Grew organic traffic by </span><strong>30%</strong></li>
            <li><span>Launched real-estate blog series</span></li>
          </ul>
          <h3><span>2023 &ndash; 2024</span></h3>
          <ul>
            <li><span>Launched </span><strong>GPT-driven PM engine</strong></li>
            <li><span>Built AI-powered email nurture funnels</span></li>
            <li><span>Expanded </span><strong>G2 marketplace </strong><span>presence globally</span></li>
            <li><span>Managed Paytm influencer video campaigns</span></li>
          </ul>
          <h3><span>2022 &ndash; 2023</span></h3>
          <ul>
            <li><span>Published &ldquo;</span><strong>AI and Future PM</strong><span>&rdquo; <a style={{cursor: 'pointer'}} href='https://chisellabs.com/pdfs/chisel-ai-e-book.pdf' target={'_blank'}><strong>eBook</strong></a></span></li>
            <li><span>Improved free-trial conversion by </span><strong>20%</strong></li>
            <li><span>Scaled YouTube </span><strong>views to 10K+</strong></li>
            <li><span>Optimized Core Web Vitals scores</span></li>
            <li><span>Streamlined Notion editorial workflows</span></li>
          </ul>
          <h3><span>2021 &ndash; 2022</span></h3>
          <ul>
            <li><span>Joined the Chisel founding marketing team</span></li>
            <li><span>Scaled website to </span><strong>100K monthly visitors</strong></li>
            <li><span>Secured </span><strong>400+</strong><span> authoritative backlinks</span></li>
            <li><span>Grew LinkedIn followers to </span><strong>5.5K+</strong></li>
            <li><span>Ran multi-channel paid-ad campaigns</span></li>
          </ul>
          <h3><span>2020 &ndash; 2021</span></h3>
          <ul>
            <li><span>Founded Health Archiculates wellness Brand</span></li>
            <li><span>Drove </span><strong>30%+</strong><span> organic SEO traffic</span></li>
            <li><span>Executed </span><strong>PPC campaigns</strong><span> boosting conversions</span></li>
            <li><span>Published CMS (WordPress) based blogs</span></li>
          </ul>
          <h3><span>&nbsp;</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Stats;
