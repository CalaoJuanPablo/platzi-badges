import React from "react";
import md5 from "md5";

export function Gravatar({ email, className }) {
  const hash = md5(email);

  return (
    <img
      className={className}
      src={
        `https://gravatar.com/avatar/${hash}?d=identicon` ||
        "https://gravatar.com/avatar?d=identicon"
      }
      alt="Avatar"
    />
  );
}
