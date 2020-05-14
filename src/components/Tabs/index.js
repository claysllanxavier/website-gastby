import React, { cloneElement, useState } from "react"
import Tab from "./Tab"

import { Container, TabList, TabContent } from "./styles"

function Tabs({ defaultActiveIndex, children }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex || 0)

  const handleTabClick = tabIndex => {
    if (tabIndex !== activeIndex) {
      setActiveIndex(tabIndex)
    }
  }

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
    if (children[activeIndex]) {
      return children[activeIndex].props.children
    }

    return children.props.children
  }

  return (
    <Container>
      <TabList>{renderChildrenTabs()}</TabList>
      <TabContent>{renderActiveTabContent()}</TabContent>
    </Container>
  )
}

Tabs.Tab = Tab

export default Tabs
