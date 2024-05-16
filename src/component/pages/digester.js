import React from "react";
import "./digaster.css";
import image1 from "./b1.jpg";
import image2 from "./b2.jpg";
import image3 from "./b4.jpg";
import image4 from "./f1.jpg"

const Digaster = () => {
  return (
    <div className="image-explainer">
      <div className="image-container">
        <img src={image1} alt="Description of Image 1" />
        <div class=" h1-p-img">
          <h1 class="head">
            Producing Renewable Energy(Producing Renewable Energy)
          </h1>

          <p class="paragraph">
            Digesters are specialized systems that break down organic waste, such as food scraps and other biodegradable materials, through a process called anaerobic digestion. This process involves microorganisms breaking down the waste in an oxygen-free environment, resulting in the production of biogas and nutrient-rich digestate.
            Digesters are specialized systems that break down organic waste, such as food scraps and other biodegradable materials, through a process called anaerobic digestion. This process involves microorganisms breaking down the waste in an oxygen-free environment, resulting in the production of biogas and nutrient-rich digestate.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image2} alt="Description of Image 2" />
        <div class="h1-p-img">
          <h1 class="head">
            Our Commitment to a Sustainable Future (
            Reducing Greenhouse Gas Emissions)
          </h1>

          <p class="paragraph">
            Every year, a significant amount of food goes to waste, which could have been used to feed those in need. By utilizing digesters, we can efficiently process food scraps from our food banks, community kitchens, and meal delivery services, ensuring that as little food as possible goes to waste.
            The digestate produced by our digesters is a nutrient-rich material that can be used as compost. This compost is utilized in community gardens, supporting local agriculture and providing fresh, organic produce for our food programs. This creates a sustainable loop where food waste is transformed into valuable resources for growing more food.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image3} alt="Description of Image 2" />
        <div class=" h1-p-img">
          <div class="topic">
            <h1 class="head">
              How You Can Support Our Efforts
              Donate
            </h1>
          </div>
          <p class="paragraph">
            The digestate produced by our digesters is a nutrient-rich material that can be used as compost. This compost is utilized in community gardens, supporting local agriculture and providing fresh, organic produce for our food programs. This creates a sustainable loop where food waste is transformed into valuable resources for growing more food.
            The digestate produced by our digesters is a nutrient-rich material that can be used as compost. This compost is utilized in community gardens, supporting local agriculture and providing fresh, organic produce for our food programs. This creates a sustainable loop where food waste is transformed into valuable resources for growing more food.
            By diverting organic waste from landfills and processing it in digesters, we significantly reduce the emission of methane, a potent greenhouse gas. This contributes to our overall efforts to combat climate change and promote environmental sustainability.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image4} alt="Description of Image 2" />
        <div class=" h1-p-img">
          <div class="topic">
            <h1 class="head">How You Can Support Our Efforts
              Donate</h1>
          </div>
          <p class="paragraph">
            By diverting organic waste from landfills and processing it in digesters, we significantly reduce the emission of methane, a potent greenhouse gas. This contributes to our overall efforts to combat climate change and promote environmental sustainability.
            By diverting organic waste from landfills and processing it in digesters, we significantly reduce the emission of methane, a potent greenhouse gas. This contributes to our overall efforts to combat climate change and promote environmental sustainability.
            Implementing digesters is just one part of our broader commitment to sustainability. We continuously seek innovative solutions to minimize waste, reduce our environmental impact, and educate our community about the importance of sustainable practices. Our goal is to create a model that other organizations can replicate, amplifying the positive impact on both local and global scales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Digaster;
