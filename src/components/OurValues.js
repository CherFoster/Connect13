import React from "react";
import '../style/OurValues.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css';

function OurValues() {
    return (
        <div className="hr">
            <section className="values">
                <div className="container">
                    <div className="row">
                    <div className="heading">
                        <h2>Our Values</h2>
                    </div>
                    </div>
                    <div className="row">
                        <div className="block">
                        <blockquote>
                            <p>Our market network of specialists enables us to bring precise expertise that has walked-the-walk. This gives us an understanding of your business and the drivers impacting your situation, and an experienced-based context for solving the problem.
                            </p>	
                    </blockquote>	
                        </div>
                        <div className="block">
                        <blockquote>
                            <p>We believe the most effective approach to advisory services is through dialog. Bring the right expertise to the conversation. Facilitate open-minded discussion and debate. Challenge conventional thinking. The exercise expands understanding the problem, creates unanticipated alternatives and enables our clients to explore new possibilities.
                            </p>	
                        </blockquote>	
                        </div>
                        <div className="block">
                        <blockquote>
                            <p>Connect13 efforts will get right down into the practical details of execution. You will never get strategy without execution. You will never set vision without aligning day-to-day operations. Together, we will get to measurable results.
                            </p>	
                        </blockquote>	
                        </div>	
                    </div>
                </div>	
                </section> 
            </div>
    );
}

export default OurValues;