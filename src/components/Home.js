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
            copy: "We assist clients in thoroughly examining their operational challenges, aligning systems, business processes, organizational structures, and incentive plans, all while ensuring measurability in terms of process metrics and outcomes directly tied to company strategy. This approach fosters an environment where employees focus their efforts on achieving measurable, desired results, reducing waste, and enhancing satisfaction. As efficiencies improve, operational income increases, embodying Connect13's commitment to delivering tangible returns on investment.",
        },
        {
            title: "Market Advisory",
            text: "We believe the core value of Connect13 is our Market Network, and our ability to make meaningful connections.",
            copy: "Connect13 prioritizes the value of relationships over commissions, focusing on meaningful connections rather than acting as an external sales force. Our engagement model eschews traditional sales commissions in favor of a Market Advisory relationship. This entails a monthly consulting and advising service on the Colorado market, leveraging our extensive Market Network. The aim is to provide measurable outcomes, including strategic market analysis and introductions to key contacts. These connections often lead to significant opportunities, transcending mere sales to foster valuable, lasting relationships. At Connect13, making impactful connections is our core mission, unmatched in Colorado.",
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
            <p className="home-body">Connect13 is a boutique management consulting firm that delivers highly tangible benefits to clients through the most effective Market Network in Colorado. We provide a range of focused advisory services including strategy creation, operational alignment, market penetration, and access to capital investment sources. We provide these services to companies ranging from startups seeking their first rounds of funding to mature, established organizations looking at major transformation.</p>
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