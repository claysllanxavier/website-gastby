import React from "react"
import cx from "classnames"

import { TabItem, TabLink } from "./styles"

const Tab = ({ className, label, isActive, onClick }) => {
  const activeLinkClass = cx({
    active: isActive,
  })

  return (
    <TabItem className={activeLinkClass}>
      <TabLink onClick={onClick}>{label}</TabLink>
    </TabItem>
  )
}

export default Tab
