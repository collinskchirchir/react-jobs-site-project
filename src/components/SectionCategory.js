import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts';
import Title from './Title';

function SectionCategory() {
  return (
    <SectionCategoryStyled>
      <InnerLayout>
        <div className='title-con'>
          <Title name={'All Categories'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat.'} />
        </div>
      </InnerLayout>
    </SectionCategoryStyled>
  )
}

const SectionCategoryStyled = styled.section`

`;
export default SectionCategory