import styled from "styled-components";

const Foot = styled.div`
  border-top: 1px solid #e4e2e0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  ul {
    display: flex;
    color: #2d2d2d;
    padding: 0;
    font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif !important;

    font-size: 1rem;
    letter-spacing: 0;
    font-weight: 400;
    line-height: 1.43;
  }
  li {
    list-style: none;
    margin-right:10px;
    border-bottom: 1px solid transparent;
  }
  li:hover {
    text-decoration: underline black;
    cursor: pointer;
    background-color: #ffffff;
  }

  ul:nth-child(1) {
    margin-bottom: 1.5625rem;
  }
  @media (max-width: 620px) {
    ul {
      display: flex;
      flex-direction:column;
      list-style: none;
      width: 90vw !important;
      font-size: 1rem;
      letter-spacing: 0;
      font-weight: 400;
      line-height: 1.43;
    }
    span{
      display:none;
    }
    li {
      color:grey;
      background-color: #ffffff;
      
    }
  }
`;

export function Footer() {
  return (
    <>
      <Foot>
        <div>
          <ul>
            <li>Career Advice  </li>
            <li>Browse Jobs  </li>
            <li>Browse Companies  </li>
            <li>Salaries  </li>
            <li>Indeed Events  </li>
            <li>Work at Indeed  </li>
            <li>Countries  </li>
            <li>About  </li>
            <li>Help Center</li>
          </ul>

          <ul>
            <li>© 2021 Indeed  </li>
            <li>Accessibility at Indeed  </li>
            <li>Privacy Center  </li>
            <li>Cookies </li>
            <li>Privacy  </li>
            <li>Terms</li>
          </ul>
        </div>
      </Foot>
    </>
  );
}