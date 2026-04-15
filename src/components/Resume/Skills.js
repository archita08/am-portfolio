import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

const Skills = ({ skills, tools, categories }) => {
  const initialButtons = Object.fromEntries(
    [['All', false]].concat(categories.map(({ name }) => [name, false])),
  );

  const [buttons, setButtons] = useState(initialButtons);

  const handleChildClick = (label) => {
    // Toggle button that was clicked. Turn all other buttons off.
    const newButtons = Object.keys(buttons).reduce(
      (obj, key) => ({
        ...obj,
        [key]: label === key && !buttons[key],
      }),
      {},
    );
    // Turn on 'All' button if other buttons are off
    newButtons.All = !Object.keys(buttons).some((key) => newButtons[key]);
    setButtons(newButtons);
  };

  const getRows = () => {
    // search for true active categories
    const actCat = Object.keys(buttons).reduce(
      (cat, key) => (buttons[key] ? key : cat),
      'All',
    );

    const comparator = (a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    };

    return skills
      .sort(comparator)
      .filter((skill) => actCat === 'All' || skill.category.includes(actCat))
      .map((skill) => (
        <SkillBar categories={categories} data={skill} key={skill.title} />
      ));
  };

  const getButtons = () => Object.keys(buttons).map((key) => (
    <CategoryButton
      label={key}
      key={key}
      active={buttons}
      handleClick={handleChildClick}
    />
  ));

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title text-left">
        <h3 className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
          Skills &amp; tools
        </h3>
        <div className="skills-tools-list-div grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <ul>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Content Strategy &amp; Writing</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>SEO (On-Page &amp; Off-Page)</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Social Media Management</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Influencer Marketing</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>PPC Campaigns</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Copywriting &amp; Editing</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Cross-functional Collaboration</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Analytics &amp; Content Optimization</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Creative Writing</span></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Ghostwriting</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Health content</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Lifestyle Writing</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Magazines</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Microsoft Office</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Online</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Video Marketing</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Research Skills</span></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Google Analytics, SEMrush, Ahrefs,</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Meta Ads Manager, Google Ads, Google Search Console</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>Chisel, Canva, Figma</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>WordPress, HubSpot, Notion</span></li>
              <li className="text-left text-sm leading-relaxed text-muted-foreground"><span>LinkedIn, Instagram, Quora, Reddit</span></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="skill-button-container">{getButtons()}</div> */}
      {/* <div className="skill-row-container">{getRows()}</div> */}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      competency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
