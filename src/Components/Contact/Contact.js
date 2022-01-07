import React from "react";
import Footer from "../Footer/Footer";
import {
  ContactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  Textarea,
  InputSubmit,
} from "./style.js";
function Contact() {
  return (
    <React.Fragment>
      <ContactSection>
        <div class="container">
          <ContactTitle>
            <Span>Drop </Span>Me A line
          </ContactTitle>
          <Form>
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" class="sub" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <InputSubmit type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
