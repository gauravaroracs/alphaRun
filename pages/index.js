import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Thankful Elaborate Caterpillar</title>
          <meta property="og:title" content="Thankful Elaborate Caterpillar" />
        </Head>
        
        <Hero17
          action2={
            <Fragment>
              <span className="home-text114">Secondary action</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text115">Main action</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text116">
                Medium length hero headline goes here
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text117">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </Fragment>
          }
        ></Hero17>
        <Features24
          feature3Description={
            <Fragment>
              <span className="home-text118">
                Connect with like-minded individuals and grow together in your
                running journey.
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text119">Community Building</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text120">
                Learn from experienced professionals in various fields who share
                a passion for running.
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text121">Pre-run Warm-up</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text122">
                Get ready for your run with our recommended warm-up routines.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text123">Expert Advice</span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          heading1={
            <Fragment>
              <span className="home-text124">Join Alpha Run Club</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text125">
                Stay connected with our running community and level up your
                running game!
              </span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text126">Join WhatsApp</span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature3Description={
            <Fragment>
              <span className="home-text127">
                Stay updated on the latest running events with our list
                displaying event dates, titles, locations, and a convenient
                registration button.
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text128">
                View information about different runners including their avatar,
                name, and profession. Hover over the card to see a brief bio and
                a link to their Instagram profile.
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text129">Photo Gallery</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text130">Runner Cards</span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text131">
                Explore a visually appealing masonry photo gallery showcasing
                various running events and moments captured in stunning images.
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text132">Upcoming Events</span>
            </Fragment>
          }
        ></Features25>
        <Pricing14
          plan3Price={
            <Fragment>
              <span className="home-text133">$29.99/month</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text134">Join Elite Club</span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text135">Basic plan</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text136">Subscribe Now</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text137">Enterprise plan</span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text138">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text139">Exclusive training plans</span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text140">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text141">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text142">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text143">
                Personalized coaching sessions
              </span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text144">Feature text goes here</span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text145">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text146">$199.99/year</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text147">Get started</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text148">Get Started</span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text149">All features of Plan 2</span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text150">Nutrition guidance</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text151">$200/yr</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text152">Business plan</span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text153">Feature text goes here</span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text154">Get started</span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text155">
                Priority registration for races
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text156">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text157">All features of Plan 1</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text158">Pricing plan</span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text159">Feature text goes here</span>
            </Fragment>
          }
          plan1={
            <Fragment>
              <span className="home-text160">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text161">Business plan</span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text162">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text163">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="home-text164">Feature text goes here</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text165">or $29 monthly</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text166">$19.99/month</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text167">or $49 monthly</span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text168">Feature text goes here</span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text169">Feature text goes here</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text170">or $20 monthly</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text171">$299/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text172">$299.99/year</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text173">Feature text goes here</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text174">$499/yr</span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text175">Feature text goes here</span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text176">Monthly challenges</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text177">$99.99/year</span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text178">
                Access to all virtual running events
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text179">VIP race day experience</span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text180">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text181">Get started</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text182">$9.99/month</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text183">Enterprise plan</span>
            </Fragment>
          }
        ></Pricing14>
        <Steps2
          step1Description={
            <Fragment>
              <span className="home-text184">
                Become a member of our exclusive running community and connect
                with like-minded individuals who are passionate about running.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text185">
                Immerse yourself in our visually captivating photo gallery
                showcasing the beauty of running and the camaraderie within
                Alpha Run Club.
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text186">Explore Runner Profiles</span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text187">
                Discover a diverse group of runners from various professions.
                Get to know their stories, connect with them, and follow them on
                Instagram.
              </span>
            </Fragment>
          }
          step1Title={
            <Fragment>
              <span className="home-text188">Join Alpha Run Club</span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text189">Enjoy Stunning Photos</span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text190">
                Stay updated on our upcoming events, mark your calendars, and
                register to participate in exciting running experiences.
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text191">Attend Upcoming Events</span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          author2Position={
            <Fragment>
              <span className="home-text192">Doctor</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text193">Software Engineer</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text194">John Doe</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text195">Alex Johnson</span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text196">
                As a doctor, I understand the importance of staying active.
                Alpha Run Club has not only improved my physical health but also
                my mental well-being.
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text197">Jane Smith</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text198">Designer</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text199">Emily Brown</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text200">
                Read what our members have to say about their experience with
                Alpha Run Club.
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text201">Product Manager</span>
            </Fragment>
          }
          review1={
            <Fragment>
              <span className="home-text202">
                I&apos;ve never felt more motivated to run regularly until I
                joined Alpha Run Club. The community support and training
                programs are top-notch!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text203">Testimonials</span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text204">
                Being a busy professional, finding time for fitness was always a
                challenge. Alpha Run Club&apos;s flexible schedules and
                supportive environment have made it easy for me to stay
                committed.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text205">
                Alpha Run Club has not only helped me improve my running
                technique but also introduced me to a wonderful community of
                like-minded individuals. Highly recommended!
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text206">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="home-text207">
                123 Main Street, New York, NY 10001
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text208">Contact Us</span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text209">
                456 Palm Avenue, Los Angeles, CA 90001
              </span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text210">New York City</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text211">Los Angeles</span>
            </Fragment>
          }
        ></Contact10>
        <Footer4
          link5={
            <Fragment>
              <span className="home-text212">Privacy Policy</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text213">FAQ</span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text214">About Us</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text215">Terms of Service</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text216">Contact Us</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text217">Terms and Conditions</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text218">Cookies Policy</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text219">Privacy Policy</span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text219 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
