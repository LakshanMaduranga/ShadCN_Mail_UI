"use client";
import * as React from "react";
import { IMailProps } from "./store/types";
import { MailModuleLayout } from "./mail-module-layout";

export function Mail({
  defaultLayout = [],
  defaultCollapsed = false,
  navCollapsedSize,
  account,
  mails,
}: IMailProps) {
  return (
    <MailModuleLayout
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={navCollapsedSize}
      account={account}
      mails={mails}
    />
  );
}
