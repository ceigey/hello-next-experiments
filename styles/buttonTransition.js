import { css } from 'emotion'

let baseSpeed = "0.15s"

export let buttonTransition = css`
  transition:
    background ${baseSpeed} ease-in-out,
    background-color ${baseSpeed} ease-in-out,
    color ${baseSpeed} ease-in-out,
    outline-color ${baseSpeed} ease-in-out,
    outline-syle ${baseSpeed} ease-in-out,
    outline-width ${baseSpeed} ease-in-out,
    box-shadow ${baseSpeed} ease-in-out,
    text-shadow ${baseSpeed} ease-in-out
  ;
`;