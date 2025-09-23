import Header from "./Header"

import Star from "./components/Star"
import { SamplePillBadge, SampleSquareBadge } from "./components/Badge/SampleBadge"
import SampleButton from "./components/Button/SampleButton"
import { DefaultTestimonialWithImage, PropsTestimonialWithImage } from "./components/Testimonials/TestimonialWithImage/SampleTestimonialWithImage"
import { DefaultTestimonialNoImage, PropsTestimonialNoImage } from "./components/Testimonials/TestimonialNoImage/SampleTestimonialNoImage"
import { SampleDefaultCard, SamplePropsCard } from "./components/Card/SampleCard"
import SampleMenu from "./components/Menu/SampleMenu"
import { SampleSingleLineBanner, SampleMultiLineBanner } from "./components/Banner/SampleBanner"



function App() {

  return (
    <>
      <Header />
      
      <main className="components-container">


        <section id="testimonials">
          <h2>Testimonials Component</h2>
          <h3>Default Testimonial with Image</h3>
          {DefaultTestimonialWithImage}
          <h3>Props Testimonial with Image</h3>
          {PropsTestimonialWithImage}

          <h3>Default Testimonial No Image</h3>
          {DefaultTestimonialNoImage}

          <h3>Props Testimonial No Image</h3>
          {PropsTestimonialNoImage}
        </section>

        <section id="badge">
          <h2>Badge Component</h2>

          <h3>Square Badge</h3>
          <div className="badge-container">
            {SampleSquareBadge}
          </div>

          <h3>Pill Badge</h3>
          <div className="badge-container">
            {SamplePillBadge}
          </div>
        </section>

        <section id="banner">
          <h2>Banner Component</h2>
          <h3>Single-Line</h3>
          {SampleSingleLineBanner}
          <h3>Multi-Line Line</h3>
          {SampleMultiLineBanner}
        </section>

        <section id="card">
          <h2>Card Component</h2>
          <h3>Default Card</h3>
          {SampleDefaultCard}
          <br />
          <h3>Props based Card</h3>
          {SamplePropsCard}
        </section>

        <section id="star">
          <h2>Star Component</h2>
          <Star onChange={() => console.log("Changed")} />
        </section>

        <section id="menu">
          <h2>Menu Component</h2>
          {SampleMenu}
          
        </section>
        
        <section id="button">
          <h2>Button Component</h2>
          {SampleButton}
        </section>


      </main>

      <footer><p>© 2025 My Component Library Demo</p></footer>
    </>
  )
}


export default App
