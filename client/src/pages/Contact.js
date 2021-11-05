import React from "react";
import { MdOutlinePhoneAndroid, MdEmail, MdPlace } from "react-icons/md";

// Styles
import { Container, DetailsContainer } from "./styles/contact.styles";

// Importing Components
import ContactCard from "../components/ContactCard";

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
    </Container>
  );
};

export default Contact;
