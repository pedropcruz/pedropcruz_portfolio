import React, {Component} from "react";
import TimelineCSS from "./Timeline.css";
import Logo from "../../resources/me.svg";
import ExperienceDATA from "../../resources/ProfessionalExperience";

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Out', 'Nov', 'Dec'],
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
        this.createMarkup = this.createMarkup.bind(this);
        this.positioningMarkups = this.positioningMarkups.bind(this);
        this.getMarkupsFromYears = this.getMarkupsFromYears.bind(this);
        this.calculateHeightForYearElement = this.calculateHeightForYearElement.bind(this);

        this.state={
            geth1ElementHeight: 0
        }
    }

    componentDidMount() {
        this.showUntilPresent();
        this.positioningMarkups();

        this.setState({
            geth1ElementHeight: document.querySelector('div.timeline__graph--year').querySelector('h1').getBoundingClientRect().height
        })
    }

    padNumber(num) {
        return (num < 10) ? "0" + num : num;
    }

    constructTimeline() {
        return (
            <div className="timeline__graph" id={`timeline__graph-${__id}`}>
                {this.getYearsDividers(this.getMonthsDividers())}
                {this.createMarkup(ExperienceDATA)}
            </div>
        );
    }

    getMonthsDividers() {
        return months.map((month, e) =>
            <span key={e} className="timeline__graph--year_month" data-month={month}
                  data-year={this.props.year}> </span>
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

    hideFutureMonths(actualMonth) {
        let monthsArr = months.slice();
        monthsArr.splice(actualMonth + 1, months.length).forEach(function (el, i) {
            let $elementMonthToHide = document.querySelector(`span[data-month="${el}"]`);
            $elementMonthToHide.style.display = 'none';
        });
    }

    createMarkup(data) {
        let markups = data.map((job, i) => (
            <div key={i} from={job.from} to={job.to} className="timeline__graph--markups__job px3 ml3 flex flex-column justify-center">
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

    positioningMarkups() {
        let $markups = document.querySelector('div.timeline__graph--markups'),
            $markupsArr = [].slice.call($markups.children);

        $markupsArr.map((job) => {
            let date = new Date(),
                getYearFrom = job.getAttribute('from').split('-')[1],
                getYearTo = (job.getAttribute('to') === 'PRESENT' ? endTime : job.getAttribute('to').split('-')[1]),
                getMonthFrom = months[Number(job.getAttribute('from').split('-')[0]) - 1],
                getMonthTo = (job.getAttribute('to') === 'PRESENT' ? months[date.getMonth()] : months[Number(job.getAttribute('to').split('-')[0]) - 1]);
            let arrNumberOfYearOnProfession = [];

            while (Number(getYearFrom) <= Number(getYearTo)) {
                getYearFrom = Number(getYearFrom);
                arrNumberOfYearOnProfession.push(getYearFrom);
                getYearFrom++;
            }

            //get offsetHeight from h1 element
            let getH1Element = document.querySelector(`div[data-year="${getYearTo}"] h1`).getBoundingClientRect().height;


            this.getMarkupsFromYears(arrNumberOfYearOnProfession, {
                getMonthFrom: getMonthFrom,
                getMonthTo: getMonthTo,
                getH1Element: getH1Element
            }, job);
        });
    }

    getMarkupsFromYears(arrData, options, job) {
        let arrFromStart = [],
            arrWithNoStartOrEndTime = [],
            arrUntilEnd = [],
            arrWithTime = [],
            $findYear = "";

        let getMonthFrom = options.getMonthFrom,
            getMonthTo = options.getMonthTo;

        arrData.map(($el, i, lastIndex) => {
            lastIndex = lastIndex.length;
            $findYear = document.querySelector(`div[data-year="${$el}"]`);
            switch (i) {
                case 0:
                    arrFromStart = [].slice.call($findYear.children).reverse()
                        .slice(months.indexOf(getMonthFrom) + 1);
                    break;

                case 1:
                case (lastIndex !== i + 1):
                    if (arrData.length > 2) {
                        arrWithNoStartOrEndTime = [].slice.call($findYear.children).reverse()
                            .slice(0, -1);
                    }
                case (arrData.length - 1):
                case (lastIndex === i + 1):
                    arrUntilEnd = [].slice.call($findYear.children).slice(0, -1).reverse()
                        .slice(0, months.indexOf(getMonthTo) + 1);

                    arrWithTime = arrFromStart.concat(arrWithNoStartOrEndTime, arrUntilEnd);
                    break;
                default:
                    break;
            }
        });

        if (arrData.length !== 1 && arrData.length >= 3) {
            arrWithTime = arrFromStart.concat(arrWithNoStartOrEndTime, arrUntilEnd);
        } else if(arrData.length === 1){
            $findYear = document.querySelector(`div[data-year="${arrData[0]}"]`);
            arrWithTime = [].slice.call($findYear.children).slice(0, -1).reverse()
                .slice(months.indexOf(getMonthFrom), months.indexOf(getMonthTo)+1);
        }else{
            arrWithTime = arrFromStart.concat(arrUntilEnd);
        }

        this.calculateHeightForYearElement(arrWithTime, job, options.getH1Element);

    }

    calculateHeightForYearElement(markupRolesArray, job, $h1ElementHeight){
        let $getYearHeightElement = 0;
        markupRolesArray.forEach((e) => {
            $getYearHeightElement = $getYearHeightElement + e.getBoundingClientRect().height;
            if(e.getAttribute("data-month") === "Jan"){
                $getYearHeightElement = $getYearHeightElement - e.getBoundingClientRect().height + $h1ElementHeight;
            }
        });

        let style = {
            height: $getYearHeightElement.toFixed(2).toString() + 'px'
        };

        Object.assign(job.style, style);
    }

    render() {
        const description =
            "Join to your team of work, in order to develop my technical and \n" +
            "Professional skills, to grow close to you in order to achieve a \n" +
            "goal together, to offer a service with efficiency and quality.";

        return (
            <TimelineCSS className="col col-7 clearfix timeline" geth1ElementHeight={this.state.geth1ElementHeight}>
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
