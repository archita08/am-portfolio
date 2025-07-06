import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/mldangelo/personal-site/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/mldangelo/personal-site/stargazers',
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this Portfolio',
    value: '3150',
    link: 'https://github.com/mldangelo/personal-site/graphs/contributors',
  },
];

export default data;
