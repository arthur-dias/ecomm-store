import getBanner from '@/actions/getBanner'
import getProducts from '@/actions/getProducts'
import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'

export const revalidate = 0

const HomePage = async () => {
  const banner = await getBanner('d1bbc9da-a5b8-45d4-a7db-ee9ec3ac4d3e')
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Banner data={banner} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Destaque' items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
