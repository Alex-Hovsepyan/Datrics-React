import ClientLogo from "../Services/ClientLogo/ClientLogo"
import ServicesContact from "../Services/ServicesContact/ServicesContact"
import SubHeader from "../SubHeader/SubHeader"
import MembersContact from "./MembersContact/MembersContact"
import MembersContent from "./MembersContent/MembersContent"
import { data } from "./MembersContent/data"

function Members(){
    return (
        <>
            <SubHeader title='Our Team Two' subtitle='Meet Our Members' />
            <MembersContent data={data} />
            <MembersContact />
            <ServicesContact />
            <ClientLogo />
        </>
    )
}

export default Members