/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company Portfolio
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string|undefined} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Chisel',
    position: 'Head of Content and Marketing',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary: 'Chisel is the primary app for agile product management and product managers. This efficient software offers three main pillars: Roadmap management, Team alignment, and User research.',
    highlights: <>
      <ul>
        <li>
          <span>Founding member leading the&nbsp;</span><strong><span>entire content and marketing function</span></strong><span>&nbsp;from 0 to scale, increasing&nbsp;</span><strong><span>organic website traffic from 0 to 100,000+ monthly visitors</span></strong><span>&nbsp;and growing LinkedIn followers from 0 to&nbsp;</span><strong><span>5,500+ organically</span></strong><span>, with&nbsp;</span><strong><span>500,000+ impressions</span></strong><span>.</span>
        </li>
        <li>
          <span>Defined and led&nbsp;</span><strong><span>brand messaging and positioning</span></strong><span>&nbsp;across all channels&mdash;including website, LinkedIn, YouTube, Twitter, Quora, Atlassian, G2, Azure Marketplace and other marketplaces, ensuring consistency and alignment with product and audience needs.</span>
        </li>
        <li>
          <span>Built and executed a comprehensive&nbsp;</span><strong><span>SEO and backlink strategy</span></strong><span>, resulting in&nbsp;</span><strong><span>400+ high-quality backlinks</span></strong><span>, including from&nbsp;</span><strong><span>Canva and HubSpot</span></strong><span>, and significant gains in search visibility and authority.</span>
        </li>
        <li>
          <span>Authored and led content production for over&nbsp;</span><strong><span>400+ long-form articles and glossary pages</span></strong><span>,&nbsp;</span><strong><span>300+ infographics</span></strong><span>, and an&nbsp;</span><strong><span>AI-focused eBook</span></strong><span>&nbsp;titled&nbsp;</span><em><span>&ldquo;AI and the Future of Product Management&rdquo;</span></em><span>, which attracted&nbsp;</span><strong><span>1,000s of reads</span></strong><span>&nbsp;and drove&nbsp;</span><strong><span>80+ product signups</span></strong><span>.</span>
        </li>
        <li>
          <span>Created and managed all visual and written content, including&nbsp;</span><strong><span>UX content, LinkedIn creatives, YouTube videos, infographics</span></strong><span>, and&nbsp;</span><strong><span>launch campaign assets</span></strong><span>, ensuring high engagement across channels.</span>
        </li>
        <li>
          <span>Launched and managed multi-channel campaigns (including&nbsp;</span><strong><span>paid ads</span></strong><span>) for product updates and feature rollouts, increasing user acquisition and engagement.</span>
        </li>
        <li>
          <span>Led and executed&nbsp;</span><strong><span>partnership-driven content marketing</span></strong><span>&nbsp;strategies with organizations like&nbsp;</span><strong><span>Product School, Product Collective, The Product Folks, QuestionPro</span></strong><span>, and&nbsp;</span><strong><span>Trimeta</span></strong><span>, resulting in&nbsp;</span><strong><span>50,000+ YouTube views</span></strong><span>&nbsp;and significantly expanded brand reach.</span>
        </li>
        <li>
          <span>Produced&nbsp;</span><strong><span>100+ blogs for QuestionPro and Trimeta</span></strong><span>, growing their website traffic from&nbsp;</span><strong><span>12K to 80K monthly visitors</span></strong><span>&nbsp;through targeted SEO and content optimization.</span>
        </li>
        <li>
          <span>Built and managed a&nbsp;</span><strong><span>content-led lead generation engine</span></strong><span>&nbsp;through strategic collaboration with the Sales team, generating&nbsp;</span><strong><span>10+ qualified meetings per month</span></strong><span>&nbsp;via organic social and email funnels.</span>
        </li>
        <li>
          <span>Hired, mentored, and scaled a&nbsp;</span><strong><span>high-performing content and SEO team</span></strong><span>, ensuring alignment with business goals and editorial excellence.</span>
        </li>
        <li>
          <span>Conducted regular&nbsp;</span><strong><span>content audits</span></strong><span>, implemented CRO best practices, and optimized user journeys via targeted, conversion-focused content.</span>
        </li>
        <li>
          <span>Oversaw and grew Chisel&rsquo;s digital footprint across platforms, including&nbsp;</span><strong><span>LinkedIn, YouTube, Twitter, Quora, and WordPress</span></strong><span>, contributing directly to growth, engagement, and product signups.</span>
        </li>
      </ul>
    </>,
  },
  // {
  //   name: 'CirclePe',
  //   position: 'Content & Social Media Manager',
  //   url: 'https://promptfoo.dev',
  //   startDate: '2024-07-01',
  //   summary: 'Tenant Membership Platform.',
  //   highlights: [
  //     'Built and scaled engineering team, emphasizing diversity and open-source contribution',
  //     'Established key partnerships with AI research institutions and tech companies',
  //   ],
  // },
  // {
  //   name: 'Impactrix',
  //   position: 'Content Strategist & Influencer Coll',
  //   url: 'https://promptfoo.dev',
  //   startDate: '2024-07-01',
  //   summary: 'Digital Marketing Agency.',
  //   highlights: [
  //     'Built and scaled engineering team, emphasizing diversity and open-source contribution',
  //     'Established key partnerships with AI research institutions and tech companies',
  //   ],
  // },
  // {
  //   name: 'AddTitans',
  //   position: 'Content Strategist',
  //   url: 'https://promptfoo.dev',
  //   startDate: '2024-07-01',
  //   summary: 'Digital Marketing Agency.',
  //   highlights: [
  //     'Built and scaled engineering team, emphasizing diversity and open-source contribution',
  //     'Established key partnerships with AI research institutions and tech companies',
  //   ],
  // },
  // {
  //   name: 'Health Archiculates',
  //   position: 'Founder, Content & Brand Designer',
  //   url: 'https://promptfoo.dev',
  //   startDate: '2024-07-01',
  //   summary: 'Personal Venture.',
  //   highlights: [
  //     'Built and scaled engineering team, emphasizing diversity and open-source contribution',
  //     'Established key partnerships with AI research institutions and tech companies',
  //   ],
  // },
];

export default work;
