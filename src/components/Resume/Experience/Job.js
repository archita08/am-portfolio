import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => (
  <article className="jobs-container">
    <div>
      <div style={{textAlign: 'left',fontSize: '24px'}}>
        <div><strong><span>Chisel&nbsp;</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Head&nbsp;</span></strong><strong><span>of Content &amp; Marketing Manager&nbsp;</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div>Aug 2021 - Present</div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Chisel is the primary app for agile product management and product managers. This efficient software offers three main pillars: Roadmap management, Team alignment, and User research.</span></strong></div>
      </div>
      <ul style={{textAlign: 'left', fontSize: '16px'}}>
        <li><span>Founding membe</span><span>r leading the entire content and marketing function from&nbsp;</span><strong><span>0 to scale</span></strong><span>, increasing organic website traffic from&nbsp;</span><strong><span>0 to 100,000+ monthly visitors</span></strong><span>&nbsp;and growing LinkedIn followers from&nbsp;</span><strong><span>0 to 5,500+ organically, wi</span></strong><strong><span>th 500,000+ impressions</span></strong><span>.</span></li>
        <li><span>D</span><span>efined and led brand messaging and positioning across all channels&mdash;including&nbsp;</span><strong><span>website, LinkedIn, YouTube, Twitter, Quora, Atlassian, G2, Azure Marketplace,</span></strong><span>&nbsp;and other marketplaces, ensuring consistency and alignment with product and audience needs.</span></li>
        <li><span>Built and&nbsp;</span><span>executed a comprehensive SEO and backlink strategy, resulting in&nbsp;</span><strong><span>400+ high-quality backlinks,</span></strong><span>&nbsp;including from Canva and HubSpot, and significant gains in search visibility and authority.</span></li>
        <li><span>Authored and led content production for over&nbsp;</span><strong><span>400+ long-form articles</span></strong><span>&nbsp;and glossary pages,&nbsp;</span><strong><span>300+ infographics</span></strong><span>, and an AI-focused <a style={{cursor: 'pointer'}} href='https://chisellabs.com/pdfs/chisel-ai-e-book.pdf' target={'_blank'}><strong>eBook</strong></a> titled &ldquo;</span><strong><span>AI and the Future of Product Management</span></strong><span>&rdquo;, which attracted&nbsp;</span><strong><span>1,000s of reads and drove 80+ product signups</span></strong><span>.</span></li>
        <li><span>Created and managed all visual and written content, including&nbsp;</span><strong><span>UX content, LinkedIn creatives, YouTube videos, infographics, and launch campaign assets</span></strong><span>, ensuring high engagement across channels.</span></li>
        <li><span>Launched and managed&nbsp;</span><strong><span>multi-channel campaigns</span></strong><span>&nbsp;(including paid ads) for product updates and feature rollouts, increasing user acquisition and engagement.</span></li>
        <li><span>Led and executed partnership-driven content marketing strategies with organizations like Product School, Product Collective, The Product Folks, QuestionPro, and Trimeta, resulting in&nbsp;</span><strong><span>10,000+ YouTube views</span></strong><span>&nbsp;and significantly expanded brand reach.</span></li>
        <li><span>Produced&nbsp;</span><strong><span>100+ blogs</span></strong><span>&nbsp;for QuestionPro and Trimeta, growing their website traffic from&nbsp;</span><strong><span>12K to 80K</span></strong><span>&nbsp;monthly visitors through targeted SEO and content optimization.</span></li>
        <li><span>Built and managed a content-led lead generation engine through strategic collaboration with the Sales team, generating&nbsp;</span><strong><span>10+ qualified meetings per month</span></strong><span>&nbsp;via organic social and email funnels.</span></li>
        <li><span>Hired, mentored, and scaled a</span><strong><span>&nbsp;high-performing content and SEO team,</span></strong><span>&nbsp;ensuring alignment with business goals and editorial excellence.</span></li>
        <li><span>Conducted regular content audits, implemented&nbsp;</span><strong><span>CRO best practices</span></strong><span>, and optimized user journeys via targeted, conversion-focused content.</span></li>
        <li><span>Oversaw and grew Chisel&rsquo;s digital footprint across platforms, including&nbsp;</span><strong><span>LinkedIn, YouTube, Twitter, Quora, and WordPress</span></strong><span>, contributing directly to growth, engagement, and product signups.</span></li>
      </ul>
    </div>
    <div>
      <div style={{textAlign: 'left',fontSize: '24px'}}>
        <div><strong><span>Addtitans Pvt. Ltd.&nbsp;</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Content &amp; Marketing Manager</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div>Jan 2024 - Jan 2025</div>
      </div>
      <ul style={{textAlign: 'left', fontSize: '16px'}}>
        <li><span>Led content marketing for major clients like&nbsp;</span><strong><span>Paytm and NX Wave Credit Card</span></strong><span>, executing influencer campaigns that generated 1M+ video views and boosted brand visibility across YouTube and Instagram.</span></li>
        <li><span>Cr</span><span>eated and managed&nbsp;</span><strong><span>20+ social media content</span></strong><span>&nbsp;calendars, resulting in&nbsp;</span><strong><span>100,000+ organic impressions</span></strong><span>&nbsp;and a&nbsp;</span><strong><span>25% increase in engagement rates</span></strong><span>&nbsp;across LinkedIn, Instagram, and Quora.</span></li>
        <li><span>Developed and delivered&nbsp;</span><strong><span>100+ content assets</span></strong><span>, including blogs, whitepapers, landing pages, and <a style={{cursor: 'pointer'}} href='https://chisellabs.com/pdfs/chisel-ai-e-book.pdf' target={'_blank'}><strong>eBook</strong></a>, contributing to a&nbsp;</span><strong><span>35% uplift in lead conversions</span></strong><span>&nbsp;for client campaigns.</span></li>
        <li><span>Executed end-to-end&nbsp;</span><strong><span>SEO strategies (on-page and off-page)</span></strong><span>, leading to a&nbsp;</span><strong><span>30&ndash;50% increase</span></strong><span>&nbsp;in organic traffic for key clients within&nbsp;</span><strong><span>4&ndash;6 months</span></strong><span>.</span></li>
        <li><span>Produced influencer content (scripts, captions, creative briefs) for campaigns with top-tier creators like&nbsp;</span><strong><span>Abhi &amp; Niyu and Bekifaayati</span></strong><span>, helping drive CTR improvements of up to&nbsp;</span><strong><span>40% on social content.</span></strong></li>
        <li><span>Collaborated with design and sales teams to ensure&nbsp;</span><strong><span>brand-aligned messaging</span></strong><span>&nbsp;across digital campaigns, improving consistency and increasing content effectiveness across touchpoints.</span></li>
      </ul>
      <div style={{textAlign: 'left',fontSize: '24px'}}>
        <div><strong><span>Impactrix Ad Agency</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Content &amp; Copywriter (Freelance)</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div>Jan 2024 - Apr 2024</div>
      </div>
      <ul style={{textAlign: 'left', fontSize: '16px'}}>
        <li><span>Developed and executed&nbsp;</span><strong><span>SEO and PPC strategies&nbsp;</span></strong><span>for real estate and healthcare clients, resulting in a&nbsp;</span><strong><span>20&ndash;40% increase&nbsp;</span></strong><span>in lead conversions and&nbsp;</span><strong><span>30%+ growth</span></strong><span>&nbsp;in organic traffic within&nbsp;</span><strong><span>3 months.</span></strong></li>
        <li><span>Wrote and edited&nbsp;</span><strong><span>50+ SEO-optimized blog posts</span></strong><span>&nbsp;tailored to brand voice and business objectives, improving average&nbsp;</span><strong><span>page time and reducing bounce rates by 15&ndash;20%.</span></strong></li>
        <li><span>Created and managed&nbsp;</span><strong><span>5+ monthly social media content</span></strong><span>&nbsp;calendars, driving&nbsp;</span><strong><span>25K+ total impressions</span></strong><span>&nbsp;and enhancing content consistency across platforms like Instagram and LinkedIn.</span></li>
        <li><span>Collaborated on ad creation, including copy and creative direction, contributing to&nbsp;</span><strong><span>CTR increases of up to 35%</span></strong><span>&nbsp;on paid social and search campaigns.</span></li>
        <li><span>Worked cross-functionally with&nbsp;</span><strong><span>design, strategy, and client-facing teams to align messaging, visuals, and campaign goals</span></strong><span>, ensuring integrated delivery across digital touchpoints.</span></li>
      </ul>
      <div style={{textAlign: 'left',fontSize: '24px'}}>
        <div><strong><span>CirclePe (Freelance)&nbsp;</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Content Strategist</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div>March 2023 - May 2023</div>
      </div>
      <ul style={{textAlign: 'left', fontSize: '16px'}}>
        <li><span>Wrote SEO-optimized&nbsp;</span><strong><span>40+ blog content</span></strong></li>
        <li><span>Led&nbsp;</span><strong><span>SEO strategy</span></strong><span>&nbsp;for website (on-page and off-page)</span></li>
        <li><span>Developed LinkedIn content calendars for founders and brand (</span><strong><span>impressions 15k, with about 300+ post interactions</span></strong><span>)</span></li>
        <li><span>Executed content strategy for&nbsp;</span><strong><span>Quora and Reddit</span></strong></li>
      </ul>
      <div style={{textAlign: 'left',fontSize: '24px'}}>
        <div><strong><span>Nira Fragrances (Freelance) &nbsp;</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Digital Content Consultant</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div>Jan 2024 - Jan 2025</div>
      </div>
      <ul style={{textAlign: 'left', fontSize: '16px'}}>
        <li><span>Co-created company website and&nbsp;</span><strong><span>oversaw design and content development</span></strong></li>
        <li><span>Built and executed full content and design strategy</span></li>
        <li><span>Wrote&nbsp;</span><strong><span>blog articles</span></strong><span>&nbsp;and created&nbsp;</span><strong><span>social media content</span></strong></li>
        <li><span>Managed&nbsp;</span><strong><span>influencer marketing</span></strong><span>&nbsp;efforts</span></li>
      </ul>
    </div>
    <div>
      <div style={{textAlign: 'left',fontSize: '24px'}}>
        <div><strong><span>Hello Genee (freelance)&nbsp;</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Content &amp; PPC Associate</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div>Jan 2024 - Jan 2025</div>
      </div>
      <ul style={{textAlign: 'left', fontSize: '16px'}}>
        <li><span>Developed&nbsp;</span><strong><span>blog content&nbsp;</span></strong><span>and&nbsp;</span><strong><span>social media strategy</span></strong></li>
        <li><span>C</span><span>reated ad copies and collaborated on&nbsp;</span><strong><span>graphics</span></strong></li>
        <li><span>Handled&nbsp;</span><strong><span>PPC campaigns</span></strong><span>&nbsp;and managed&nbsp;</span><strong><span>SEO execution</span></strong></li>
      </ul>
      <div style={{textAlign: 'left',fontSize: '24px'}}>
        <div><strong><span>Health Archiculates&nbsp;</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Founder &amp; Content Creator</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div>Dec 2022 - Present</div>
      </div>
      <ul style={{textAlign: 'left', fontSize: '16px'}}>
        <li><span>Built and managed a&nbsp;</span><strong><span>personal wellness-focused content page</span></strong></li>
        <li><span>Co</span><span>llaborated with skincare brands&nbsp;</span><strong><span>COSIQ and Earth Rhythm</span></strong></li>
        <li><span>C</span><span>reated&nbsp;</span><strong><span>branded social media content</span></strong><span>&nbsp;and campaign assets</span></li>
      </ul>
      <div style={{textAlign: 'left',fontSize: '24px'}}>
        <div><strong><span>Toprankers &amp; Career Launcher</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div><strong><span>Legal Content Writer &amp; Course Developer</span></strong></div>
      </div>
      <div style={{textAlign: 'left',fontSize: '16px'}}>
        <div>Dec 2018 - Aug 2020</div>
      </div>
      <ul style={{textAlign: 'left', fontSize: '16px'}}>
        <li><span>Designed legal writing curriculum and resources for&nbsp;</span><strong><span>CLAT aspirants</span></strong></li>
        <li><span>Au</span><span>thored&nbsp;</span><strong><span>legal blogs, judgment analysis</span></strong><span>, and Supreme Court judgment summaries</span></li>
        <li><span>Supporte</span><span>d educational&nbsp;</span><strong><span>content strategy for online legal platforms</span></strong></li>
      </ul>
    </div>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.string,
  }).isRequired,
};

export default Job;
