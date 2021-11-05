import React from "react";
import { MdOutlinePhoneAndroid, MdEmail, MdPlace } from "react-icons/md";

// Styles
import {
  Container,
  DetailsContainer,
  Form,
  FormContainer,
  InputContainers,
  InputContainer,
  Input,
  Heading,
  TextArea,
} from "./styles/contact.styles";

// Importing Components
import ContactCard from "../components/ContactCard";
import CustomButton from "../components/CustomButton";

const Contact = () => {
  return (
    <Container>
      <DetailsContainer>
        <ContactCard
          title="Phone"
          value="+91 12345 12345"
          icon={<MdOutlinePhoneAndroid className="icon-medium" />}
        />
        <ContactCard
          title="Email"
          value="architj240@gmail.com"
          icon={<MdEmail className="icon-medium" />}
        />
        <ContactCard
          title="Address"
          value="Bangalore, India"
          icon={<MdPlace className="icon-medium" />}
        />
      </DetailsContainer>

      <FormContainer>
        <Form>
          <Heading>Get in Touch</Heading>
          <InputContainers>
            <InputContainer>
              <Input type="text" placeholder="Your name" />
            </InputContainer>

            <InputContainer>
              <Input type="email" placeholder="Your email" />
            </InputContainer>

            <InputContainer>
              <Input type="number" placeholder="Your number" />
            </InputContainer>
          </InputContainers>

          <TextArea placeholder="Message" />

          <CustomButton title="Submit" />
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Contact;
