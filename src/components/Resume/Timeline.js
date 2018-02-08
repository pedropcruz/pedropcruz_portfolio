import React, {Component} from "react";
import TimelineCSS from "./Timeline.css";
import Logo from "../../resources/me.svg";
import ExperienceDATA from "../../resources/ProfessionalExperience";

const months = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Out', 'Nov', 'Dec'],
    __id = Date.now(),
    startTime = new Date(2014, 1, 1).getFullYear(),
    endTime = new Date().getFullYear();

export default class Timeline extends Component {
    constructor(props) {
        super(props);

        this.constructTimeline = this.constructTimeline.bind(this);
        this.showUntilPresent = this.showUntilPresent.bind(this);
        this.padNumber = this.padNumber.bind(this);
        this.getMonthsDividers = this.getMonthsDividers.bind(this);
        this.hideFutureMonths = this.hideFutureMonths.bind(this);
        this.defineMarkup = this.defineMarkup.bind(this);
    }

    componentDidMount() {
        this.showUntilPresent();
    }

    padNumber(num) {
        return (num < 10) ? "0" + num : num;
    }

    constructTimeline() {
        return (
            <div className="timeline__graph" id={`timeline__graph-${__id}`}>
                {this.getYearsDividers(this.getMonthsDividers())}
                {this.defineMarkup(ExperienceDATA)}
            </div>
        );
    }

    getMonthsDividers() {
        return months.map((month, e) =>
            <span key={e} className="timeline__graph--year_month" data-month={month}> </span>
        ).reverse();
    }

    getYearsDividers(monthDivider) {

        return Array(endTime + 1 - startTime).fill(startTime).map((time, e) => (
            <div key={e} className="timeline__graph--year" data-year={time + e}>
                {monthDivider}
                <h1 className="h1">{time + e}</h1>
            </div>
        )).reverse();
    }

    showUntilPresent() {
        let getMonth = new Date().getMonth(),
            $elementMonth = document.querySelector(`span[data-month="${months[getMonth]}"]`);

        this.hideFutureMonths(getMonth);

        $elementMonth.setAttribute('data-present', "true");

    }

    defineMarkup(data) {
        let markups = data.map((job, i) => (
            <div key={i} from={job.from} to={job.to}>
                <h1 className="h1">{job.role}</h1>
                <p>Dates: {job.from.split('-').join('.')} - {(job.to === 'PRESENT') ? job.to : job.to.split('-').join('.')}</p>
                <p>Company: {job.company}</p>
                <a href={job.url}>{job.url}</a>
            </div>
        )).reverse();

        return (
            <div className="timeline__graph--markups">
                {markups}
            </div>
        )
    }

    hideFutureMonths(actualMonth) {
        months.splice(actualMonth + 1, months.length).map((el, i) => {
            let $elementMonthToHide = document.querySelector(`span[data-month="${el}"]`);
            $elementMonthToHide.style.display = 'none';
        });
    }


    render() {
        const description =
            "Join to your team of work, in order to develop my technical and \n" +
            "Professional skills, to grow close to you in order to achieve a \n" +
            "goal together, to offer a service with efficiency and quality.";

        return (
            <TimelineCSS className="col col-7 clearfix timeline">
                <div className="col col-3 timeline__image">
                    <figure className="fit block">
                        <picture>
                            <img src={Logo} alt=""/>
                        </picture>
                    </figure>
                </div>
                <div className="col col-9 timeline__desc">
                    <h2 className="h2 m0">Pedro Miguel Pereira da</h2>
                    <h1 className="h1 m0">Cruz</h1>
                    <p className="my3">{description}</p>
                    <a className="btn p2 inline-block" href="/">
                        Download CV as PDF
                    </a>
                </div>
                <div className="clearfix timeline__grid">
                    <div className="col col-12">
                        {this.constructTimeline()}

                    </div>
                </div>
            </TimelineCSS>
        );
    }
}
