import styled from 'styled-components'
import { device } from 'ui'

export const SidebarContainer = styled.div`
  background-color: #3d3d3d;
  right: 0;
  width: 19rem;
  height: 100vh;
  padding: 0;
  position: fixed;
  transition: transform 300ms ease-in;
  z-index: 100;
  &.isHidden {
    transform: translateX(120%);
    transition: transform 300ms ease-in-out;
`

export const SidebarInner = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Line = styled.i`
  margin: 20px 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.12);
`

export const CopyRight = styled.span`
  margin-bottom: 20px;
  font-size: 1rem;
  text-align: center;
  @media ${device.mobileS} {
    font-size: 0.9rem;
  }
`

export const SidebarTopContent = styled.div`
  position: relative;
  padding-top: 1rem;
  div {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`

export const SidebarBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const SidebarClose = styled.div`
  position: absolute;
  left: -30px;
  top: 10px;
  cursor: pointer;
  @media ${device.mobileSM} {
    left: 90%;
  }
`

export const SidebarBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 99;
  &.isOpened {
    opacity: 0;
    z-index: -99;
    pointer-events: none;
  }
`

export const CopyRightNote = styled.div`
  display: flex;
  flex-direction: column;
`
