import { CategoryMain } from '@/styles/pages/Category.styles';
import SEO from '@/components/SEO';
import HeaderContainer from '@/containers/HeaderContainer';
import TVContainer from '@/containers/TVContainer';

export default function OnAir() {
  return (
    <>
      <SEO title={'TV 방영 중'} />

      <HeaderContainer color='white' />
      <CategoryMain>
        <h3>
          <span>TV 방영 중</span>
        </h3>

        <section>
          <TVContainer request='on_the_air' layout='grid' />
        </section>
      </CategoryMain>
    </>
  );
}
