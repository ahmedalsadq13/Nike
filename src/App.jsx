import {
  Hero,
  PopularProduct,
  Services,
  SpecialOffer,
  CustomersReviews,
  Subscribe,
  Footer
} from './sections';
const App = () =>(
  <main className='relative'>
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b">

    </section>
    <section className="padding">
      PopularProduct
    </section>
    <section className="padding">
      SuperQuality
    </section>
    <section className="padding-x py-10">
      Services
    </section>
    <section className="padding">
      Special Offers
    </section>
    <section className="padding bg-pale-blue">
      Cusromers Reviews
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      Subscribe
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      Footer
    </section>
  </main>
);


export default App;