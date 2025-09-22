import Star from "./components/Star"

import { SamplePillBadge, SampleSquareBadge } from "./components/Badge/SampleBadge"

import SampleButton from "./components/Button/SampleButton"

import { DefaultTestimonialWithImage, Props } from "./components/Testimonials/TestimonialWithImage/SampleTestimonialWithImage"

import { SampleDefaultCard, SamplePropsCard } from "./components/Card/SampleCard"

import SampleMenu from "./components/Menu/SampleMenu"

import { SampleSingleLineBanner, SampleMultiLineBanner } from "./components/Banner/SampleBanner"



function App() {

  return (
    <div className="components-container">
      <h1>React Components ++</h1>


        <h2>Testimonials Component</h2>
        <h3>Default Testimonial with Image</h3>
        {DefaultTestimonialWithImage}

        <h3>Props Testimonial with Image</h3>
        {Props}

        <h2>Badge Component</h2>
        <h3>Square Badge</h3>
        <div className="badge-container">
          {SampleSquareBadge}
        </div>

        <h3>Pill Badge</h3>
        <div className="badge-container">
          {SamplePillBadge}
        </div>

      <br />
      <hr />

        <h2>Banner Component</h2>
        <h3>Single-Line</h3>
        {SampleSingleLineBanner}

        <h3>Multi-Line Line</h3>
        {SampleMultiLineBanner}

      <br/>
      <hr />

        <h2>Card Component</h2>
        <h3>Default Card</h3>
        {SampleDefaultCard}

        <br/>
        <h3>Props based Card</h3>
        {SamplePropsCard}

      <br/>

        <h2>Star Component</h2>
        <Star onChange={() => console.log("Changed")} />

      <br />
      <hr />

        <h2>Button Component</h2>
        {SampleButton}

      <br />
      <hr />

        <h2>Menu Component</h2>
        {SampleMenu}
        <hr />

    </div>


  )
}


export default App
