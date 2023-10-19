'use client'

import useCart from '@/hooks/useCart'
import CartItem from '@/components/ui/cartItem'
import Container from '@/components/ui/container'
import Summary from '@/components/Summary'

const CartPage = () => {
  const cart = useCart()

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py16 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-black'>Carrinho de Compras</h1>
          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-7'>
              {cart.items.length === 0 ? (
                <p className='text-neutral-500'>Nenhum item no carrinho</p>
              ) : null}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage
