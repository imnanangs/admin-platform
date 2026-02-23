import React from "react";
import { Tabs, Tab } from "@heroui/react";

interface TabItem {
  key: string | number;
  title: string;
  disabled?: boolean;
  content?: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  activeTab: string | number;
  onTabChange: (key: React.Key) => void;
}

export default function CustomTabs({
  tabs,
  activeTab,
  onTabChange,
}: CustomTabsProps) {
  return (
    <Tabs
      aria-label="Custom Tabs"
      variant="bordered"
      selectedKey={activeTab}
      onSelectionChange={onTabChange}
      size="sm"
      classNames={{
        base: "w-full overflow-x-auto no-scrollbar",
        cursor: "w-full bg-gradient-to-r from-primary to-secondary rounded-lg",
        tabContent:
          "group-data-[selected=true]:text-white text-sm text-gray-500 font-medium",
      }}
    >
      {tabs.map((tab) => (
        <Tab key={tab.key} title={tab.title} isDisabled={tab.disabled}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
}
