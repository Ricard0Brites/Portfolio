import { Component } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

import Header from './components/Header';
import placeholderImage from './assets/placeholder.png';

/* Images */
import npcImage from './assets/AI_NPC/AI_NPC_Cover.gif';
import { getCurrentTheme } from './themeUtils';

// Define Skill as an object structure
interface Skill 
{
  name: string;
  icon: string;
}

// Define ProjectEntry as an object structure
interface ProjectEntry 
{
  title: string;
  description: React.ReactNode;
  link: string;
  repositoryLink: string;
  image: string;
  skills: Skill[];
}

function makeSkillEntry(name: string, icon: string)
{
  return {name, icon};
}

// Function returns the ProjectEntry object directly
function makeProjectEntry(title: string, description: React.ReactNode, link: string, repositoryLink: string, image: string, skills: Skill[]) : ProjectEntry 
{
  return {
    title,
    description,
    link,
    repositoryLink,
    image,
    skills,
  };
}

export default class App extends Component 
{
  // Enables link hashing eg: website.com/#Section3 (the website scrolls into section 3 automatically)
  EnableLinkHashing()
  {
    const hash = window.location.hash;
    const parts = hash.split("#");
    
    if (parts.length <= 0) return;

    const el = document.getElementById(decodeURIComponent(parts[1]));
    if (el) 
      el.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() 
  {
    this.EnableLinkHashing();
  }

  render() 
  {
    return (
      <Router>
        {this.GetRoutings()}
      </Router>
    );
  }

  GetRoutings() 
  {
    return (
      <div>
        <header>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>  
        </header>

        <Routes>
          <Route path="/" element={this.GetFrontEnd()} />
        </Routes>
      </div>
    );
  }

  GetPortfolioItems()
  {
    // Make item List
    const Items : ProjectEntry[] = 
    [
        makeProjectEntry(
          'AI NPC', 
          <div className="flex flex-col gap-2 text-left text-sm">
            {/* Perception */}
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-bold">Perception:</span>
              <div className="flex flex-wrap gap-1">
                {
                  ['Vision', 'Audio', 'Damage Detection'].map(
                    sub => 
                    (
                      <span key={sub} className={`text-xs ${getCurrentTheme().bg} px-2 py-0.5 rounded ${getCurrentTheme().text}`}>{sub}</span>
                    )
                  )
                }
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-bold">Navigation:</span>
              <div className="flex flex-wrap gap-1">
                {
                  ['Spline Pathing', 'Cover EQS'].map(
                    sub => 
                    (
                      <span key={sub} className={`text-xs ${getCurrentTheme().bg} px-2 py-0.5 rounded ${getCurrentTheme().text}`}>{sub}</span>
                    )
                  )
                }
              </div>
            </div>

            {/* Combat */}
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-bold">Combat: </span>
              <div className="flex flex-wrap gap-1">
                {
                  ['Bullet Trajectory Prediction'].map(
                    sub => 
                    (
                      <span key={sub} className={`text-xs ${getCurrentTheme().bg} px-2 py-0.5 rounded ${getCurrentTheme().text}`}>{sub}</span>
                    )
                  )
                }
              </div>
            </div>
          </div>,
          'link',
          'https://github.com/Ricard0Brites/Unreal_AI_Demo',
          npcImage, 
          [
            makeSkillEntry('UE5', placeholderImage),
            makeSkillEntry('UE6', placeholderImage),
          ]
        ),
    ];

    /*

    const Items : ProjectEntry[] = 
    [
      makeProjectEntry(
                        'Title 1',
                        <ul className='text-left'>
                          <li className='bullet-li'> Test 1</li>
                          <li className='bullet-li'> Test 2</li>
                        </ul>,
                        'link',
                        'repo link',
                        placeholderImage,
                        [
                            makeSkillEntry('UE5', placeholderImage),
                            makeSkillEntry('UE6', placeholderImage),
                        ]
                      ),
    ];

    */

    const FrontendObjects = Items.map((item) => 
    (
      <div key={item.title} className="border border-gray-300 rounded-lg shadow-none hover:shadow-md transition-shadow flex flex-col items-center text-center overflow-hidden">

        {/* Image Container */}
        <div className="relative w-full h-64">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent flex items-end justify-center p-4">
            <h3 className="text-2xl font-bold text-white px-2">{item.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 w-full flex flex-col items-center">
          
          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center w-full">
            {item.skills.map(skill => (
              <span key={skill.name} className="bg-gray-100 text-xs px-2 py-1 rounded flex items-center">
                <img src={skill.icon} alt={skill.name} className="w-4 h-4 mr-1" />
                {skill.name}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="mb-4">{item.description}</div>

          {/* Links */}
          <div className="flex gap-4 justify-center w-full">
            <a href={item.link} className="text-blue-500 hover:underline">View Project</a>
            <a href={item.repositoryLink} className="text-blue-500 hover:underline">Repository</a>
          </div>
        </div>

      </div>
    ));

    return (
      <div className="mt-5 grid grid-cols-2 gap-4">
        {FrontendObjects}
      </div>
    );
  }

  GetFrontEnd() 
  {
    return (
      <div>
        <Header />
          {this.GetPortfolioItems()}
      </div>
    );
  }
}
