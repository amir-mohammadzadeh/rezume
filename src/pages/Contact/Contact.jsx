import './Contact.css'
import Widget from '../../components/Widget/Widget'
import { EmailIcon, LocationIcon, SocialIcon, TelephoneIcon } from '../../assets/Icons'
import Social from '../../components/Social/Social'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactCard from '../../components/ContactCard/ContactCard'
import useData from '../../Hooks/useData'

const Contact = () => {
  const Details = useData.getDetailes()
  return (
    <>
      <div className="mx-8 mb-4 md:mb-0">
        <h1>
          تماس بامن
        </h1>
      </div>
      <div className="flex gap-4 xl:flex-col-reverse">
        <Widget className='Form_container' >
          <h3>
            ارسال ایمیل
          </h3>
          <span>
            با من در ارتباط باشید
          </span>

          <ContactForm />

        </Widget>
        <div className="contact-cards_container">
          <ContactCard
            icon={
              <TelephoneIcon size='32' />
            }
            value={Details.phoneNumber}
          />

          <ContactCard
            icon={
              <EmailIcon size='32' />
            }
            value={Details.email}
          />

          <ContactCard
            icon={
              <LocationIcon size='32' />
            }
            value={
              Details.address.ostan + ' , ' + Details.address.ads
            }
          />

          <ContactCard
            icon={
              <SocialIcon size='30' />
            }
            value={
              <Social iconSize='32' />
            }
          />

        </div>
      </div>
    </>
  )
}

export default Contact