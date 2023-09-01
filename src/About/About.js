import SubHeader from "../SubHeader/SubHeader"
import AboutOffer from "./AboutOffer/AboutOffer"
import FirstClass from "./FirstClass/FirstClass"
import WorkProcess from "./WorkProcess/WorkProcess"
import MembersContent from "../Members/MembersContent/MembersContent"
import { data } from '../Members/MembersContent/data'
import UserOpinion from "./UserOpinion/UserOpinion"
import ClientLogo from "../Services/ClientLogo/ClientLogo"

function About(){
    const newData = data.slice(0, 3);
    return (
        <section className="about">
            <SubHeader title='About Us' subtitle='Learn More About Us' />
            <AboutOffer />
            <FirstClass />
            <WorkProcess />
            <MembersContent display='flex' data={newData} />
            <UserOpinion />
            <ClientLogo />
        </section>
    )
}

export default About