import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Icon,
Social,
socialLinks
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
        <Icon><i class="fi fi-brands-instagram" style={{color:'#f20163'}}></i>
        <a href="https://www.youtube.com/watch?v=YoXTO60j91g" target="blank"><i class="fi fi-brands-youtube" style={{color:'red'}}></i></a> 
        <a href="https://www.linkedin.com/company/sarvam-safety-equipment-pvt-ltd/"> <i class="fi fi-brands-linkedin" style={{color:'blue'}}></i></a>
		<a href="https://www.linkedin.com/company/sarvam-safety-equipment-pvt-ltd/"> <i class="fi fi-brands-facebook" style={{color:'#0f89e7'}}></i></a>
        <i class="fi fi-brands-whatsapp" style={{color:'#075950'}}></i>
        <i class="fi fi-brands-twitter" style={{color:'#1c93e4'}}></i>
        </Icon>
		</Social>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
