import SubHeader from "../SubHeader/SubHeader"
import BestServices from "./BestServices/BestServices"
import ClientLogo from "./ClientLogo/ClientLogo"
import Content from "./Content/Content"
import ServicesContact from "./ServicesContact/ServicesContact"

function Services(){
    return (
        <>
            <SubHeader title='Our Services' subtitle='Get to Know Our Services' />
            <Content />
            <BestServices />
            <ServicesContact />
            <ClientLogo />
        </>
    )
}

export default Services