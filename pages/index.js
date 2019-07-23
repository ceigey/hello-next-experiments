import Link from 'next/link';
import { css, cx } from 'emotion'
// Local imports
import { bordersRound } from '../styles/bordersRound';
import { boxShadowSoft } from '../styles/boxShadowSoft';
import { paddingAmple } from '../styles/paddingAmple';
import { buttonTransition } from '../styles/buttonTransition';

import '../styles/default/body';

let whiteBg = css`
  background-color: #FFFFFF;
  color: black;
`;

let blueBg = css`
  border-width: 0px;
  background-color: #0055AA;
  color: white;
  &:hover {
    background-color: #0099DD;
    text-shadow: 0px 0px 3px #00000055;
  }
  &:focus {
    box-shadow:
      0px 0px 15px 0px #00000033,
      0px 0px 0px 4px #0099DD55
    ;
  }
  &:active {
    box-shadow:
      0px 0px 15px 0px #00000033,
      0px 0px 0px 4px #0099DD55
    ;
    background-color: #002288;
    text-shadow: 0px 0px 10px #0099DDff;
  }
`;

let sharedClasses = [
  bordersRound,
  boxShadowSoft,
  paddingAmple,
  buttonTransition
];
let classDivOuter = cx (...sharedClasses, whiteBg,);
let classDivInner = cx (...sharedClasses, blueBg);

export default function Index () {
  return (
    <div>
      <Link href="/about">
        <div className={classDivOuter}>
          <button className={classDivInner}>
            <a title="About Page">About Page</a>
          </button>
        </div>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
}
