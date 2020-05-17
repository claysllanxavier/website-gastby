import React, { cloneElement, useState, useEffect } from "react"
import window from "global"
import Tab from "./Tab"

import { Container, TabList, TabContent } from "./styles"

function Tabs({ defaultActiveIndex, children }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || 0)
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  const handleTabClick = tabIndex => {
    if (tabIndex !== activeIndex) {
      setActiveIndex(tabIndex)
    }
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const cloneTabElement = (tab, index = 0) => {
    return cloneElement(tab, {
      onClick: () => handleTabClick(index),
      tabIndex: index,
      isActive: index === activeIndex,
      key: index,
    })
  }

  const renderChildrenTabs = () => {
    if (!Array.isArray(children)) {
      return cloneTabElement(children)
    }

    return children.map(cloneTabElement)
  }

  function renderActiveTabContent() {
    if (windowDimensions.width < 767.98) {
      return children
    } else if (children[activeIndex]) {
      return children[activeIndex].props.children
    }

    return children.props.children
  }

  return (
    <Container>
      <TabList>{renderChildrenTabs()}</TabList>
      {windowDimensions.width < 767.98 ? (
        children.map((child, index) => {
          return (
            <TabContent key={index.toString()}>
              {child.props.children}
            </TabContent>
          )
        })
      ) : (
        <TabContent>{renderActiveTabContent()}</TabContent>
      )}
    </Container>
  )
}

Tabs.Tab = Tab

export default Tabs
