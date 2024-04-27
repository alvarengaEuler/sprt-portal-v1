import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>So you got an email from, {firstName}!</h1>
    <p>
      So, {firstName} finally you stopped by. Now through this {email}
    </p>
    <p>{message}</p>
  </div>
);
