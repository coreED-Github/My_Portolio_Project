import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLan from './SkillsLan'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[5rem] pb-[5rem] bg-sky-200'>
      <h1 className='heading'>
        Education & <span className='text-yellow-600'> Skill</span>
      </h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]
      items-center'>
        <div>
          <SkillsItem title="Responsive Web Developer" year="2022 - 2024"/>
          <SkillsItem title="(SPAs) Developmer Next.js" year="2023 - 2024"/>
          <SkillsLan
           skill1="HTML"
           skill2="CSS"
            skill3="JavaScript"
             level1="w-[95%]"
               level2="w-[85%]"
              level3="w-[88%]" />
        </div>
        <div>
          <SkillsItem title="Next Js Developer" year="2023 - 2024"/>
          <SkillsItem title="Node Js Developer" year="2023 - 2024"/>
          <SkillsLan
skill1="React Js"
skill2="Next Js"
 skill3="TypeScript"
  level1="w-[78%]"
    level2="w-[70%]"
   level3="w-[90%]" />

        </div>
      </div>
    </div>
  )
}

export default Skills