import getBanner from '@/actions/getBanner'
import getProducts from '@/actions/getProducts'
import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'

export const revalidate = 0

const HomePage = async () => {
  const banner = await getBanner('b91b6034-0adf-41a0-a3e9-d717650202ea')
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
