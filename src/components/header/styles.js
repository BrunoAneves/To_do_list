import Image from "next/image";
import styled from "styled-components";

export const Header = styled.header`
background-color: #0D0D0D;
height: 200px;
display: flex;
`

export const Img = styled(Image)`
width: 126px;
height: auto;
margin: 0 auto;
object-fit: contain;
`