import React from "react";
import { Link, useMatches } from "react-router-dom";

const BreadCrumbs = () => {
  let matches = useMatches();
  // @ts ignore
  const crumbs = React.useMemo(() => matches.filter((match) => Boolean(match.handle?.crumb)).map((match) => match.handle?.crumb(match.params)), [matches]);
  console.log(matches, crumbs);

  return (
    <ul className="flex items-center gap-2">
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}
      {crumbs.map((crumb, index) => {
        console.log(crumb);

        return (
          <li key={index} className={index == crumbs.length - 1 ? "font-bold" : "font-medium"}>
            {crumb}
            {index == crumbs.length - 1 ? "" : " >"}
          </li>
        );
      })}
    </ul>
  );
};

export default BreadCrumbs;
