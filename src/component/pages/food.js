import React from "react";
import "./digaster.css";
import image1 from "./f1.jpg";
import image2 from "./f2.jpg";
import image3 from "./f3.jpg";
import image4 from "./f5.jpg"

const FoodPage = () => {
  return (
    <div className="image-explainer">
      <div className="image-container">
        <img src={image1} alt="Description of Image 1" />
        <div class=" h1-p-img">
          <h1 class="head">
          Nourishing Lives: Our Commitment to Ending Hunger (No Hunger More)
          </h1>

          <p class="paragraph">
          We source fresh, healthy ingredients and prepare balanced meals that cater to all dietary needs. Our team of volunteers and partners work tirelessly to distribute food to those who need it most, from children and the elderly to homeless individuals and struggling families. By addressing food insecurity, we aim to create a stronger, healthier, and more resilient community.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image2} alt="Description of Image 2" />
        <div class="h1-p-img">
          <h1 class="head">
            Foundational No Hunger More (An Urgent & Necessary
            for prepare food)
          </h1>

          <p class="paragraph">
            Join us in the fight against hunger. Whether through donations, volunteering, or spreading the word, your support makes a tangible difference. Together, we can ensure that everyone has a place at the table.
            Join us in the fight against hunger. Whether through donations, volunteering, or spreading the word, your support makes a tangible difference. Together, we can ensure that everyone has a place at the table.
            access to the essential nourishment they deserve. Through our network of food banks, community kitchens, and meal delivery services, we strive to reach the most vulnerable members of our community.
            Join us in the fight against hunger. Whether through donations, volunteering, or spreading the word, your support makes a tangible difference. Together, we can ensure that everyone has a place at the table.
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image3} alt="Description of Image 2" />
        <div class=" h1-p-img">
          <div class="topic">
            <h1 class="head">
              Equitable and Inclusive Education: Learning for All
            </h1>
          </div>
          <p class="paragraph">
          access to the essential nourishment they deserve. Through our network of food banks, community kitchens, and meal delivery services, we strive to reach the most vulnerable members of our community.
          access to the essential nourishment they deserve. Through our network of food banks, community kitchens, and meal delivery services, we strive to reach the most vulnerable members of our community.
          access to the essential nourishment they deserve. Through our network of food banks, community kitchens, and meal delivery services, we strive to reach the most vulnerable members of our community.

          </p>
        </div>
      </div>
      <div className="image-container">
        <img src={image4} alt="Description of Image 2" />
        <div class=" h1-p-img">
          <div class="topic">
            <h1 class="head">Safer School Environment</h1>
          </div>
          <p class="paragraph">
          Food Banks
Our food banks serve as vital lifelines for those experiencing food insecurity. Stocked with a variety of fresh produce, pantry staples, and essential non-perishables, our food banks are accessible to anyone in need. We partner with local farmers, grocery stores, and donors to keep our shelves full and our community fed.
Volunteers are the heart and soul of our organization. Whether you’re helping in a food bank, cooking in a community kitchen, or delivering meals, your time and effort make a real difference. Join our team of dedicated volunteers and help us bring hope and sustenance to those who need it most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
