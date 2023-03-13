import arrowRight from "../../assets/arrow-right.svg";
import projeto01 from "../../assets/project01.01.png";
import projeto02 from "../../assets/project02.2.png";
import projeto03 from "../../assets/project03.3.png";

import {
  Content,
  Projects,
  Button,
  Wrapper,
  Span,
  Footer,
  Pages,
  ListContainer,
  ListItem,
  ItemPhoto,
  ItemName,
} from "./styles";
import { useState } from "react";
import { MediaContacts } from "../footer";
// import { Link } from "react-router-dom";

const PROJECTS = [
  {
    index: 0,
    name: "Telegram",
    description:
      "Our Partners Telegram Channels & Groups.",
    image: projeto01,
    items:[
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJXqgii5hUOTHybJ3kjzRFF7UICvjlptR-rxDRvgqQ=s176-c-k-c0x00ffffff-no-rj",
        name: "React",
        url: "https://pt-br.reactjs.org/"
      },
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJXqgii5hUOTHybJ3kjzRFF7UICvjlptR-rxDRvgqQ=s176-c-k-c0x00ffffff-no-rj",
        name: "React",
        url: "https://pt-br.reactjs.org/"
      },
    ]
  },
  {
    index: 1,
    name: "Twitter",
    description:
      "Our Partners Twitter Accounts",
    image: projeto02,
    items:[
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJXqgii5hUOTHybJ3kjzRFF7UICvjlptR-rxDRvgqQ=s176-c-k-c0x00ffffff-no-rj",
        name: "React",
        url: "https://pt-br.reactjs.org/"
      },
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJXqgii5hUOTHybJ3kjzRFF7UICvjlptR-rxDRvgqQ=s176-c-k-c0x00ffffff-no-rj",
        name: "React",
        url: "https://pt-br.reactjs.org/"
      },
    ]
  },
  {
    index: 2,
    name: "Youtube",
    description:
      "Our Partners Youtube Channels",
    image: projeto03,
    items:[
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJXqgii5hUOTHybJ3kjzRFF7UICvjlptR-rxDRvgqQ=s176-c-k-c0x00ffffff-no-rj",
        name: "React",
        url: "https://pt-br.reactjs.org/"
      },
      {
        logo: "https://yt3.googleusercontent.com/ytc/AL5GRJXqgii5hUOTHybJ3kjzRFF7UICvjlptR-rxDRvgqQ=s176-c-k-c0x00ffffff-no-rj",
        name: "React",
        url: "https://pt-br.reactjs.org/"
      },
    ]
  },
];

export function Main() {
  const [currentProject, setCurrentProject] = useState(PROJECTS[0]);

  return (
    <>
      <Content>
        <Projects>
            <img src={currentProject.image} alt="projeto" />
          <Button
            onClick={() => {
              if (currentProject.index === 2) {
                return setCurrentProject(PROJECTS[0]);
              }
              setCurrentProject(PROJECTS[currentProject.index + 1]);
            }}
          >
            <img src={arrowRight} alt="" />
          </Button>
        </Projects>
        <Wrapper>
          <h1>{currentProject.name}</h1>
          <Span>
            <p>{currentProject.description}</p>
          </Span>
          <ListContainer>
            <ul>
              {currentProject.items.map((item, index) => (
                <ListItem key={index}>
                  <a href={item.url}>
                    <ItemPhoto src={item.logo} alt={item.name} />
                    <ItemName>{item.name}</ItemName>
                  </a>
                </ListItem>
              ))}
            </ul>
          </ListContainer>
        </Wrapper>
      </Content>
      <Footer>
        <MediaContacts />

        <Pages>
          <strong>0{currentProject.index + 1}</strong>
          <hr />
          <strong>03</strong>
        </Pages>
      </Footer>
    </>
  );
}
