import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const CaseStudyOne = ({
  // data: {
  //   name, position, url, startDate, endDate, summary, highlights,
  // },
}) => (
  <article className="jobs-container">
    <div>
      <h2><strong>Case Study: Chisel</strong></h2>
      <div><strong>Chisel | Head of Content &amp; Marketing</strong></div>
      <div><em><span>August 2021 &ndash; Present (Remote, SF)</span></em></div>
      <br />
      <div><strong>The Challenge</strong></div>
      <div><span>Chisel launched with zero organic traffic, minimal brand awareness, and no existing content or backlink profile. We needed a full-funnel growth engine to drive top-of-funnel leads for our product management SaaS.</span></div>
      <br />
      <div><strong>My Approach</strong></div>
      <ul>
        <li><span>Conducted in‑depth </span><strong>SEO audit</strong><span> &amp; keyword research to map </span><strong>200+ target terms</strong></li>
        <li><span>Built a content roadmap: </span><strong>400+ long‑form articles</strong><span> and glossary pages, </span><strong>300+ infographics</strong></li>
        <li><span>Led backlink outreach to industry authorities (secured links from Canva, HubSpot, Product School)</span></li>
        <li><span>Authored &ldquo;</span><strong>AI and the Future of Product Management</strong><span>&rdquo; <a style={{cursor: 'pointer'}} href='https://chisellabs.com/pdfs/chisel-ai-e-book.pdf' target={'_blank'}><strong>eBook</strong></a>, driving </span><strong>80+ signups</strong></li>
        <li><span>Deployed multi‑channel social campaigns on LinkedIn, Twitter, YouTube, Quora, and G2 markets</span></li>
      </ul>
      <div><strong>Results</strong></div>
      <ul>
        <li><strong>+100K</strong><span> monthly organic visits</span></li>
        <li><strong>400+</strong><span> high‑quality backlinks (Domain Authority 30&ndash;80)</span></li>
        <li><strong>500K+</strong><span> LinkedIn impressions, </span><strong>5,500+</strong><span> new followers</span></li>
        <li><strong>80+</strong><span> product signups directly attributed to <a style={{cursor: 'pointer'}} href='https://chisellabs.com/pdfs/chisel-ai-e-book.pdf' target={'_blank'}><strong>eBook</strong></a> download</span></li>
        <li><strong>10+</strong><span> qualified sales meetings/mo via organic social &amp; email funnels</span></li>
      </ul>
      <div><strong>Key Takeaways</strong></div>
      <ul>
        <li><span>A systematic and scalable content pipeline, combined with a relentless focus on SEO, can build traffic from scratch.</span></li>
        <li><span>High-value lead magnets (</span><strong><a style={{cursor: 'pointer'}} href='https://chisellabs.com/pdfs/chisel-ai-e-book.pdf' target={'_blank'}><strong>eBook</strong></a></strong><span>) paired with targeted outreach can significantly improve conversion rates.s</span></li>
        <li><span>Cross‑functional alignment (Product, Sales, Design) is essential for cohesive brand messaging.</span></li>
      </ul>
      <h2><strong>Case Study: Partnership Content for QuestionPro &amp; Trimeta</strong></h2>
      <div><strong>QuestionPro &amp; Trimeta | Content Lead</strong></div>
      <div><em><span>2022 &ndash; Present</span></em></div>
      <br />
      <div><strong>Objective</strong></div>
      <div><span>Amplify brand reach and lead gen for two leading analytics platforms through co‑created content.</span></div>
      <br />
      <div><strong>My Approach</strong></div>
      <ul>
        <li><span>Produced </span><strong>100+ SEO‑optimized blogs</strong><span>, landing pages, and infographics</span></li>
        <li><span>Collaborated on webinars and YouTube video scripts</span></li>
        <li><span>Joint promotions via email lists and social channels</span></li>
      </ul>
      <div><strong>Impact</strong></div>
      <ul>
        <li><span>Grew QuestionPro&rsquo;s site traffic from </span><strong>12K &rarr; 80K monthly visitors</strong></li>
        <li><span>Achieved </span><strong>10,000+ YouTube views</strong><span> across partnership content</span></li>
        <li><span>Drove </span><strong>150+ qualified leads</strong><span> via gated content and webinars</span></li>
      </ul>
      <h2><strong>Case Study: Paytm &amp; NX Wave Credit Card Campaigns</strong></h2>
      <div><strong>Additans Pvt. Ltd. | Marketing Manager</strong></div>
      <div><em><span>2020 &ndash; Aug 2021</span></em></div>
      <br />
      <div><strong>Objective</strong></div>
      <div><span>Boost brand visibility and engagement on social platforms for fintech clients.</span></div>
      <br />
      <div><strong>My Approach &amp; Results</strong></div>
      <ul>
        <li><span>Influencer campaigns (Abhi &amp; Niyu, Bekifaayati) &rarr; </span><strong>1M+</strong><span> video views, </span><strong>40%</strong><span> CTR boost</span></li>
        <li><span>Managed 20+ monthly social calendars &rarr; </span><strong>100K+</strong><span> organic impressions, +25% engagement</span></li>
        <li><span>SEO optimizations &rarr; </span><strong>30&ndash;50%</strong><span> lift in organic traffic in 4&ndash;6 months</span></li>
      </ul>
    </div>
  </article>
);

CaseStudyOne.propTypes = {
  data: PropTypes.shape({
    // name: PropTypes.string.isRequired,
    // position: PropTypes.string.isRequired,
    // url: PropTypes.string.isRequired,
    // startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.string,
  }).isRequired,
};

export default CaseStudyOne;
