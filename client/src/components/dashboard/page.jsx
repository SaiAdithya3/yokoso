import React, { useState, useEffect } from "react";
import { getCookie } from "react-cookies";
import { Mail } from "../dashboard/components/Dashboard";
import { accounts, mails } from "../dashboard/data";

const MailPage = () => {
  const [defaultLayout, setDefaultLayout] = useState(undefined);
  const [defaultCollapsed, setDefaultCollapsed] = useState(undefined);

  useEffect(() => {
    const layout = getCookie("react-resizable-panels:layout");
    const collapsed = getCookie("react-resizable-panels:collapsed");

    if (layout) setDefaultLayout(JSON.parse(layout));
    if (collapsed) setDefaultCollapsed(JSON.parse(collapsed));
  }, []);

  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <img
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
};

export default MailPage;
