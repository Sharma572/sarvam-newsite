import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Icon,
Social
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>SARVAM SEFTY</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">Contact Us</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
            
		</Column>
		<Column>
			<Heading>HELP</Heading>
			<FooterLink href="#">Track my order</FooterLink>
			<FooterLink href="#">Buying Guid</FooterLink>
			<FooterLink href="#">FAQS</FooterLink>
		</Column>
		<Column>
			<Heading>SERVAM OWN</Heading>
			<FooterLink href="#">Popular Search</FooterLink>
			<FooterLink href="#">Best Deals</FooterLink>
			<FooterLink href="#">Online Assist</FooterLink>
			<FooterLink href="#">Industry Store</FooterLink>
		</Column>
		<Column>
        <Heading>MISC</Heading>
			<FooterLink href="#">Bulk Enquiry</FooterLink>
			<FooterLink href="#">Sarvam Sefty Bussiness</FooterLink>
			<FooterLink href="#">Supplier Central</FooterLink>
		</Column>

        <Social>
        <Heading>STAY CONNECTED</Heading>
        <Icon><i class="fi fi-brands-instagram"></i>
        <i class="fi fi-brands-youtube"></i>
        <i class="fi fi-brands-linkedin"></i>
        <i class="fi fi-brands-facebook"></i>
        <i class="fi fi-brands-whatsapp"></i>
        <i class="fi fi-brands-twitter"></i>
        </Icon>
		</Social>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
