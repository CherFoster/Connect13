import React from "react";
import HomeCards from "./HomeCards";
import '../style/Home.css'; 

function Home(){
    const cards = [
        {
            title: "Strategy Creation",
            text: "Effective strategies are designed to evolve over time.",
            copy: "Connect13 helps clients create a repeatable cycle of strategic planning.  Facilitated sessions are designed to meet organizations where they are at in their process, then refine that through practical techniques that tie into operational alignment.  The result is not just refined strategic direction, but a stronger leadership team and a sustainable approach to steering the organization.",
        },
        {
            title: "Operational Alignment",
            text: "Connect13 provides that external perspective that can rapidly help clients understand issues that are often 'too close' to be seen clearly from within the organization.",
            copy: "We help clients analyze and align their operations, systems, processes, structures, and incentives, ensuring everything is measurable and aligned with their strategy. This method promotes a focus on measurable results, reduces waste, and increases satisfaction, leading to improved efficiencies and operational income. Connect13 is dedicated to delivering tangible ROI.",
        },
        {
            title: "Market Advisory",
            text: "We believe the core value of Connect13 is our Market Network, and our ability to make meaningful connections.",
            copy: "Connect13 values relationships over commissions, focusing on impactful connections instead of sales. We offer a Market Advisory service, providing monthly consulting on the Colorado market through our extensive network. Our goal is to deliver measurable results, including market analysis and introductions to key contacts, fostering opportunities and lasting relationships. Making meaningful connections is at the heart of our mission, setting us apart in Colorado.",
        },
        {
            title: "Funding Advisory",
            text: "Connect13 has extensive relationships with investor funding sources in the Colorado market.",
            copy: "Whether you are trying to find that initial round to get you off the ground or are looking to position the momentum you have built in the best light for additional expansion, we can help. Even the best ideas will suffer if they can not get connected to the right investor.",
        },

    ];

    return(
        <>
        <div className="home-container">
            <h1 className="home-heading">Strategic Business Solutions</h1>
            <p className="home-body">Connect13 is a boutique management consulting firm in Colorado, offering a suite of advisory services such as strategy creation, operational alignment, market penetration, and capital investment access. Catering to both startups seeking initial funding and established organizations undergoing significant transformations, we deliver tangible benefits through our effective Market Network.</p>
            <p className="home-body"><strong>Every Connect13 engagement is designed to not only deliver measurable business impact but to do so in combination with actionable coaching and mentoring to help companies take their executive teams to the next level.</strong></p>
        </div>
        <div className="page-content">
        {cards.map((card, index) => (
            <HomeCards key={index} title={card.title} text={card.text} copy={card.copy} />
        ))}

    </div>
    </>
    )
}

export default Home;