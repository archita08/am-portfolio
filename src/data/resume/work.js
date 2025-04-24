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
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Chisel',
    position: 'Head of Content and Marketing',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary: 'AI-Powered Product Management Software.',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution',
      'Established key partnerships with AI research institutions and tech companies',
    ],
  },
  {
    name: 'CirclePe',
    position: 'Content & Social Media Manager',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary: 'Tenant Membership Platform.',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution',
      'Established key partnerships with AI research institutions and tech companies',
    ],
  },
  {
    name: 'Impactrix',
    position: 'Content Strategist & Influencer Coll',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary: 'Digital Marketing Agency.',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution',
      'Established key partnerships with AI research institutions and tech companies',
    ],
  },
  {
    name: 'AddTitans',
    position: 'Content Strategist',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary: 'Digital Marketing Agency.',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution',
      'Established key partnerships with AI research institutions and tech companies',
    ],
  },
  {
    name: 'Health Archiculates',
    position: 'Founder, Content & Brand Designer',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary: 'Personal Venture.',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution',
      'Established key partnerships with AI research institutions and tech companies',
    ],
  },
];

export default work;
