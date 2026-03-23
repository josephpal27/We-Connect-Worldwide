import BuildTrust from "../components/services/BuildTrust"
import OurServices from "../components/home/OurServices"
import ServiceHelps from "../components/services/ServiceHelps"
import ServicesBanner from "../components/services/ServicesBanner"
import WhyUs from "../components/services/WhyUs"

const Services = () => {
    return (
        <>
            <ServicesBanner />
            <OurServices />
            <WhyUs />
            <ServiceHelps />
            <BuildTrust />
        </>
    )
}

export default Services
