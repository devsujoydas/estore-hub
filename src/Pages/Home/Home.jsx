import Blogs from "../../Components/Blogs/Blogs"
import CarSection from "../../Components/CarSection/CarSection"
import Hero from "../../Components/Hero/Hero"
import OurPlan from "../../Components/Pricing/Pricing"
import WhyChoose from "../../Components/WhyChoose/WhyChoose"
import WhySay from "../../Components/WhySay/WhySay"

const Home = () => {
  return (
    <div>
      <Hero/>
      <CarSection/>
      <WhySay />
      <Blogs/>
      <WhyChoose/>
    </div>
  )
}

export default Home