export const revalidate = 0

import getCategory from '@/actions/getCategory'
import getColors from '@/actions/getColors'
import getProducts from '@/actions/getProducts'
import getSizes from '@/actions/getSizes'
import Banner from '@/components/Banner'
import Container from '@/components/ui/container'
import Filter from '@/components/ui/filter'
import MobileFilter from '@/components/ui/mobileFilter'
import NoResults from '@/components/ui/noResults'
import ProductCard from '@/components/ui/productCard'

interface CategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })

  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <div className='bg-white'>
      <Container>
        <Banner data={category.banner} />
        <div className='px-4 sm:px-6 lg:px-8 pb-24'>
          <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
            <MobileFilter sizes={sizes} colors={colors} />
            <div className='hidden lg:block'>
              <Filter valueKey='sizeId' name='Tamanhos' data={sizes} />
              <Filter valueKey='colorId' name='Cores' data={colors} />
            </div>
            <div className='mt-6 lg:col-span-4 lg:mt-0'>
              {products.length === 0 ? <NoResults /> : null}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage
