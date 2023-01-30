import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts';
import JobCard from './JobCard';
import Title from './Title';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/logo3.svg';
import logo4 from '../img/logo4.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';
import logo7 from '../img/logo7.svg';

function SectionJobs() {
  return (
    <SectionJobsStyled>
        <InnerLayout>
          <div className='title-con'>
            <Title name={'Recent Jobs'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat.'} />
          </div>
          <div className='cards-con'>
            <JobCard
              logo={logo1}
              bg={'#27AE60'}
              name={'Maniac Tech'}
              loc={'New York, NY'}
              tit={'Software Engineer'}
              type={'Full Time'}
              stack={'Azure, C#, Python, Ruby on Rails, PostgreSQL'}
              salary={'$70,000 - $90,000'}
            />
            <JobCard
              logo={logo2}
              bg={'#27AE60'}
              name={'Maniac Tech'}
              loc={'New York, NY'}
              tit={'Software Engineer'}
              type={'Full Time'}
              stack={'Azure, C#, Python, Ruby on Rails, PostgreSQL'}
              salary={'$70,000 - $90,000'}
            />
            <JobCard
              logo={logo3}
              bg={'#27AE60'}
              name={'Maniac Tech'}
              loc={'New York, NY'}
              tit={'Software Engineer'}
              type={'Full Time'}
              stack={'Azure, C#, Python, Ruby on Rails, PostgreSQL'}
              salary={'$70,000 - $90,000'}
            />
            <JobCard
              logo={logo4}
              bg={'#27AE60'}
              name={'Maniac Tech'}
              loc={'New York, NY'}
              tit={'Software Engineer'}
              type={'Full Time'}
              stack={'Azure, C#, Python, Ruby on Rails, PostgreSQL'}
              salary={'$70,000 - $90,000'}
            />
            <JobCard
              logo={logo5}
              bg={'#27AE60'}
              name={'Maniac Tech'}
              loc={'New York, NY'}
              tit={'Software Engineer'}
              type={'Full Time'}
              stack={'Azure, C#, Python, Ruby on Rails, PostgreSQL'}
              salary={'$70,000 - $90,000'}
            />
            <JobCard
              logo={logo6}
              bg={'#27AE60'}
              name={'Maniac Tech'}
              loc={'New York, NY'}
              tit={'Software Engineer'}
              type={'Full Time'}
              stack={'Azure, C#, Python, Ruby on Rails, PostgreSQL'}
              salary={'$70,000 - $90,000'}
            />
            <JobCard
              logo={logo7}
              bg={'#27AE60'}
              name={'Maniac Tech'}
              loc={'New York, NY'}
              tit={'Software Engineer'}
              type={'Full Time'}
              stack={'Azure, C#, Python, Ruby on Rails, PostgreSQL'}
              salary={'$70,000 - $90,000'}
            />
            
          </div>

        </InnerLayout>
    </SectionJobsStyled>
  )
}
const SectionJobsStyled = styled.section`
  background-color: var(--color-neutral-3);
  .cards-con{
    padding-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px,  1fr));
    grid-gap: 2rem;
  }
`;
export default SectionJobs