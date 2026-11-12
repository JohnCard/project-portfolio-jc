import { ContactMe } from "../components/ContactMe"
import { ContactForm } from '../components/ContactForm'

export const ContactSection = () => {
  return (
    <div className={`contact__section__container d__grid bg-F3F1EE`}>
        <ContactMe email='johncard@gmail.com' phone_number='+52 222 123 4567' location='Tlaxcala, Tlax' />
        <ContactForm/>
    </div>
  )
}
