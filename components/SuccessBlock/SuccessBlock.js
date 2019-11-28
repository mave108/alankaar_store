import React, { Component } from 'react';
import AnimatedNumber from 'react-animated-number';
import './Style.scss';

class SuccessBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animate: 0
        }
        this.triggerAnimateNumber = this.triggerAnimateNumber.bind(this);
        this.unObserve = this.unObserve.bind(this);
        this.containerRef = React.createRef();
        this.observer = null;
        this.orderDilivered = 35000;
        this.happyCustomer = 35000;
        this.successRate = 98;
    }

    componentDidMount() {
        let options = {
            root: null,
            rootMargin: '-100px 0px 0px 0px',
            threshold: 1.0
        }

        this.observer = new IntersectionObserver(this.triggerAnimateNumber, options);
        this.observer.observe(this.containerRef.current);
    }

    triggerAnimateNumber(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.setState({ animate: 1 }, () => {
                    setTimeout(this.unObserve, 0)
                })
            }
        });
    }
    unObserve() {
        this.observer.unobserve(this.containerRef.current);
        // this.setState({ animate: 2 });
    }

    render() {
        return (
            <section>
                <div className="sb-section" ref={this.containerRef}>
                    <div className="container">
                        <div className="sb-content">
                            <div>
                                <div className="icon"></div>
                                <div className="title">Order Delivered</div>
                                <div className="count">
                                    {this.state.animate === 0 && '35,000'}
                                    {this.state.animate === 1 && <AnimatedNumber value={this.orderDilivered}
                                        style={{
                                            transition: '0.8s ease-out',
                                            transitionProperty:
                                                'background-color, color, opacity'
                                        }}
                                        duration={2000}
                                        // frameStyle={perc => perc == 100}
                                        formatValue={n => n == this.orderDilivered ? '35,000' : parseInt(n)}
                                    />}

                                </div>
                            </div>
                            <div>
                                <div className="icon"></div>
                                <div className="title">Happy Customer</div>
                                <div className="count">
                                    {this.state.animate === 0 && '35,000'}
                                    {this.state.animate === 1 && <AnimatedNumber value={this.happyCustomer}
                                        style={{
                                            transition: '0.8s ease-out',
                                            transitionProperty:
                                                'background-color, color, opacity'
                                        }}
                                        duration={2000}
                                        // frameStyle={perc => perc == 100}
                                        formatValue={n => n == this.happyCustomer ? '35,000' : parseInt(n)}
                                    />}
                                </div>
                            </div>
                            <div>
                                <div className="icon"></div>
                                <div className="title">Success Rate</div>
                                <div className="count">
                                    {this.state.animate === 0 && '99'}
                                    {this.state.animate === 1 && <AnimatedNumber value={this.successRate}
                                        style={{
                                            transition: '0.8s ease-out',
                                            transitionProperty:
                                                'background-color, color, opacity'
                                        }}
                                        duration={2000}
                                        // frameStyle={perc => perc == 100}
                                        formatValue={n => parseInt(n)}
                                    />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default SuccessBlock;
