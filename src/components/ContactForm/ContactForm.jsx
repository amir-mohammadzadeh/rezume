import './ContactForm.css'
import { Input, TextArea } from '../Input/Input'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Toast from '../Toast/Toast';

const ContactForm = () => {
    const form = useRef(null)
    const [loader, setLoader] = useState(false)
    const [alert, setAlert] = useState({ set: false, value: '' })

    const sendEmail = (e) => {
        e.preventDefault();
        setLoader(true)

        const hide_alert = () => {
            setTimeout(() => {
                setAlert({ set: false, value: '' })
            }, 6000)
        }

        emailjs.sendForm('service_3gp5yzm', 'template_jswzkaj', form.current, 'KUqW41cGOsmJjPiAQ')
            .then((result) => {
                setLoader(false)
                setAlert({ set: true, value: 'success' })
                hide_alert()
                e.target.reset()
                console.log(result.text);

            }, (error) => {
                setLoader(false)
                setAlert({ set: true, value: 'error' })
                hide_alert()
                console.log(error.text);
            });
    };

    return (
        <>
            <form ref={form} className='Contact_form' onSubmit={sendEmail}>

                <div className="input-fields">
                    <Input label='نام' id='user_name' />
                    <Input label='ایمیل' id='user_email' />
                    <Input label='موضوع' id='msg_subject' />
                </div>

                <div className="msg-box">
                    <TextArea label='متن پیام' id='user_message' />
                </div>

                <div className='send_button'>

                    {loader ?
                        <div class="loader"></div> :
                        <button type='submit'>
                            ارسال پیام
                        </button>
                    }
                </div>
            </form>

            {alert.set && <Toast type={alert.value} />}
        </>
    )
}

export default ContactForm