import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

// const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
//   color: blue;

//   &:hover {
//     color: red; // <Thing> when hovered
//   }

//   & ~ & {
//     background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
//   }

//   & + & {
//     background: lime; // <Thing> next to <Thing>
//   }

//   &.something {
//     background: orange; // <Thing> tagged with an additional CSS class ".something"
//   }

//   .something-else & {
//     border: 1px solid; // <Thing> inside another element labeled ".something-else"
//   }
// `;

// export default function StyledComponentsExample() {
//   return (
//     <>
//     <Thing>Hello world!</Thing>
//     <Thing>How ya doing?</Thing>
//     <Thing className="something">The sun is shining...</Thing>
//     <div>Pretty nice day today.</div>
//     <Thing>Don't you think?</Thing>
//     <div className="something-else">
//       <Thing>Splendid.</Thing>
//     </div>
//   </>
//   )
// }

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// export default function StyledComponentsExample() {
//   return (
//     <Wrapper>
//       <Title>Hello World!</Title>
//     </Wrapper>
//   );
// }

// const Button = styled.button`
//   background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
//   color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// const ReversedButton = (props) => (
//   <Button {...props} children={props.children.split('').reverse()} />
// );

// export default function StyledComponentsExample() {
//   return (
//     <>
//       <Button onClick={() => alert('nomal')}>Normal</Button>
//       <Button onClick={() => alert('primary')} primary>
//         Primary
//       </Button>
//       <TomatoButton>Tomato</TomatoButton>
//       <br />
//       <Button as="a" href="#">
//         Link with Button styles
//       </Button>
//       <TomatoButton as="a" href="#">
//         Link with Button styles
//       </TomatoButton>
//       <br />
//       <Button as={ReversedButton}>
//         Custom Button with Normal Button styles
//       </Button>
//       <br />
//     </>
//   );
// }

// const Input = styled.input.attrs((props) => ({
//   type: 'text',
//   size: props.size || '1em',
// }))`
//   border: 2px solid palevioletred;
//   margin: ${(props) => props.size};
//   padding: ${(props) => props.size};
// `;

// const PasswordInput = styled(Input).attrs({
//   type: 'password',
// })`
//   border: 2px solid aqua;
// `;

// export default function StyledComponentsExample() {
//   return (
//     <>
//       <Input placeholder="A bigger text input" size="2em" />
//       <br />
//       {/* Notice we can still use the size attr from Input */}
//       <PasswordInput placeholder="A bigger password input" size="2em" />
//     </>
//   );
// }

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

// export default function StyledComponentsExample() {
//   return (
//     <>
//       <Rotate>&lt; 💅🏾 &gt;</Rotate>
//     </>
//   );
// }

/* const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

Button.defaultProps = {
  theme: {
    color: 'red',
    borderColor: 'blue',
  },
};

const theme = {
  color: 'green',
  borderColor: 'pink',
};

export default function StyledComponentsExample() {
  return (
    <div>
      <Button>Normal</Button>

      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
} */

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

const defaultTheme = {
  color: 'green',
  borderColor: 'pink',
};

const redTheme = {
  color: 'red',
  borderColor: 'red',
};

const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink;
  }
`;

export default function StyledComponentsExample() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <div>
        <GlobalStyle />
        <button
          onClick={() => {
            setTheme(redTheme);
          }}
        >
          red
        </button>
        <button
          onClick={() => {
            setTheme(defaultTheme);
          }}
        >
          green
        </button>
        <Button>Normal</Button>

        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>

      <div>
        <button>Other</button>
        {/* 글로벌 스타일이 어디까지 영향을 미치는가? => 모든 영역에 미침 */}
      </div>
    </>
  );
}
